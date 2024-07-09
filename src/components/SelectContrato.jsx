/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { Select, MenuItem, FormControl } from "@mui/material";

const SelectContrato = ({ onChange }) => {
  //variavel que vai guardar o array com os contratos
  const [contratos, setContratos] = useState([]);
  //variavel que vai guardar os valores de estado do carregamento dos contratos
  const [carregando, setCarregando] = useState(true);
  //variaveçle que vai guardar o status de erro
  const [error, setError] = useState(null);
  //variavel que vai guardar a escolha do select para o contrato
  const [fkContrato, setFkContrato] = useState();

  // hook do react que permite sincronizar um componente com dados de sistemas externos
  //esta sendo executado para pegar os dados de cliente
  useEffect(() => {
    //função para coletar os contratos e alimentar o select de contratos do formulário item
    const AlimentaContratos = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/contratos");
        const data = response.data;
        const arrayData = data.contratos;
        if (Array.isArray(arrayData)) {
          setContratos(arrayData);
        } else {
          console.error("A resposta da API não é um ARRAY");
          setError("Formato de resposta desconhecido");
        }
      } catch (error) {
        console.error("Erro no fetching dos dados", error);
        setError("Error ao fazer o fetching dos dados");
      } finally {
        setCarregando(false);
      }
    };

    AlimentaContratos();
  }, []);

  //Pega o valor do id_contrato selecionado
  const handleChange = (event) => {
    let valor
    valor = event.target.value
    setFkContrato(valor);
    //função que será passada para o form contrato para carregar a chave do contrato
    if (onChange) {
      onChange(valor);
    }
  };

  if (carregando) {
    return <div>Carregando os dados ...</div>;
  }

  if (error) {
    return <div>Erro, favor verificar: {error}</div>;
  }

  return (
    <FormControl fullWidth>
      <label>Contratos:</label>
      <Select
        id="select-contrato"
        //valor escolhido que sera passado para o formulário
        value={fkContrato}
        onChange={handleChange}
      >
        {contratos.map((contrato) => (
          <MenuItem key={contrato.nr_contrato} value={contrato.id_contrato}>
            {contrato.nr_contrato}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectContrato;
