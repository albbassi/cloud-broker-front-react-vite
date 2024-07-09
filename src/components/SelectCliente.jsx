import { useState, useEffect } from "react";
import axios from "axios";
import { Select, MenuItem, FormControl } from "@mui/material";
import PropTypes from "prop-types";

const SelectCliente = ({ onChange }) => {
  // Variável que vai guardar o array com os clientes
  const [opcoes, setOpcoes] = useState([]);
  // Variável que vai guardar os valores de estado do carregamento dos clientes
  const [carregando, setCarregando] = useState(true);
  // Variável que vai guardar o status de erro
  const [error, setError] = useState(null);
  // Variável que vai guardar a escolha do select para o cliente
  const [escolha, setEscolha] = useState("");

  // Hook do React que permite sincronizar um componente com dados de sistemas externos
  // Está sendo executado para pegar os dados de cliente
  useEffect(() => {
    // Função para coletar os clientes e alimentar o select de clientes do formulário contratos
    const AlimentaCliente = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/clientes");
        const data = response.data;
        const arrayData = data.clientes;
        if (Array.isArray(arrayData)) {
          setOpcoes(arrayData);
        } else {
          console.error("A resposta da API não é um ARRAY");
          setError("Formato de resposta desconhecido");
        }
      } catch (error) {
        console.error("Erro no fetching dos dados", error);
        setError("Erro ao fazer o fetching dos dados");
      } finally {
        setCarregando(false);
      }
    };

    AlimentaCliente();
  }, []);

  // Pega o valor do id_cliente selecionado
  const handleChange = (event) => {
    const value = event.target.value;
    setEscolha(value);
    // Função que será passada para o form contrato para carregar a chave do cliente
    if (onChange) {
      onChange(value);
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
      <label>Cliente:</label>
      <Select
        id="select-cliente"
        // Valor escolhido que será passado para o formulário
        value={escolha}
        onChange={handleChange}
      >
        {opcoes.map((opcao) => (
          <MenuItem key={opcao.id_cliente} value={opcao.id_cliente}>
            {opcao.nome} | {opcao.cnpj}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectCliente.propTypes = {
  onChange: PropTypes.func,
};

export default SelectCliente;
