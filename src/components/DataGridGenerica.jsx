/* Código para criação de um componente datagrid que vai renderizar os dados do banco
 *  a partir de uma consulta à api do backend via axios
 */

import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import axios from "axios";

/**
 * @function coluna
 * @description Função para criação dinâmica das colunas para reutilização do componente
 *    datagrid.Recebe como parametros props e checa qual api será chamada para em seguida
 *    montar as colunas e responde ás sequintes api's clientes, filtra-contratos e filtra-itens
 * @param: apiChamada
 * @return datagrid com as colunas
 */

const coluna = async (props) => {
  const chamada = props.apiChamada;

  if (chamada === "clientes") {
    const colunas = [
      { field: "nome", width: 530, headerName: "Cliente" },
      { field: "cnpj", width: 350, headerName: "CNPJ" },
      { field: "localizacao", width: 700, headerName: "Localização" },
    ];

    return colunas;
  } else if (chamada === "filtra-contratos") {
    const colunas = [
      { field: "nr_contrato", width: 285, headerName: "Núm. Contrato" },
      { field: "dt_assinatura", width: 280, headerName: "Data Assinatura" },
      { field: "dt_inicio", width: 280, headerName: "Data Início" },
      { field: "dt_fim", width: 280, headerName: "Data Fim" },
      { field: "tipo_contrato", width: 280, headerName: "Contrato Tipo" },
      {
        field: "valor_ctr",
        width: 280,
        headerName: "Contrato Valor",
        valueFormatter: (valor_ctr) => {
          // Formata o valor da célula como moeda
          const valueFormatted = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(valor_ctr);
          return valueFormatted;
        },
      },
    ];

    return colunas;
  } else if (chamada === "filtra-itens") {
    const colunas = [
      { field: "nome_item", width: 600, headerName: "Item" },
      { field: "quantidade", width: 600, headerName: "Quantidade" },
      {
        field: "valor_unitario",
        width: 250,
        headerName: "Valor Unitário",
        valueFormatter: (valor_unitario) => {
          // Formata o valor da célula como moeda
          const valueFormatted = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(valor_unitario);
          return valueFormatted;
        },
      },
      {
        field: "valor_total",
        width: 250,
        headerName: "Valor Total",
        valueFormatter: (valor_total) => {
          // Formata o valor da célula como moeda
          const valueFormatted = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(valor_total);
          return valueFormatted;
        },
      },
    ];
    return colunas;
  }

  return [];
};


/**
 * @function fetchRows 
 * @description Função para coleta dos dados da api via axios. Os parâmetros são recebidos via props
 * @param cnpj
 * @param nr_contrato
 * @param chamada
 * @return um array com os valores da retornados pelo banco
**/

const fetchRows = async (props) => {
  

  try {
    const chamada = props.apiChamada;
    const cnpj = props.cnpj;
    const nr_contrato = props.nrContrato;
    const key = `${chamada}`;
    const procuraCnpj = `${cnpj}`;
    const procuraCtr = `${nr_contrato}`;

    if (key === "clientes") {
      const response = await axios.get(`http://localhost:5000/${key}`);
      const data = response.data[key];
      return data;
    } else if (key === "filtra-contratos") {
      const response = await axios.get(
        `http://localhost:5000/${key}?cnpj=${procuraCnpj}`
      );
      const data = response.data["contratos"];
      return data;
    } else if (key === "filtra-itens") {
      const response = await axios.get(
        `http://localhost:5000/${key}?nr_contrato=${procuraCtr}`
      );
      const data = response.data["itens"];
      return data;
    }
  } catch (error) {
    console.error("Não foi possível obter os dados: ", error);
    return [];
  }
};

// eslint-disable-next-line react/prop-types
const DataGridGenerica = ({ apiChamada, onRowClick, cnpj, nrContrato }) => {
  /* Função responsavel pela grid dinâmica que renderizar os dados na tela do usuário

*/

  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRows = await fetchRows({ apiChamada, cnpj, nrContrato });
      setRows(fetchedRows);

      const fetchedColumns = await coluna({ apiChamada });
      setColumns(fetchedColumns);
    };
    fetchData();
  }, [apiChamada, cnpj, nrContrato]);

  return (
    <div style={{ height: "100vh", width: "100%", tableLayout: "container" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => Object.values(row).join("-")}
        pageSize={10}
        onRowClick={onRowClick}
        visibleFields
        sx={{
          boxShadow: 15,
          paddingBottom: 5,
          //position:'fixed',
          border: 1,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
      />
    </div>
  );
};

export default DataGridGenerica;
