// Importes do React e do react-hook-form
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

// Importação do axios para as requisições
import axios from "axios";

// Importação dos componentes de botão
import BtnCancel from "./BtnCancel";
import BtnCadastrar from "./BtnCadastrar";

// Importação do componente select
import SelectCliente from "./SelectCliente";

// Importação do CSS geral
import "./FormGeral.css";

// Função principal do formulário
export default function FormContrato() {
  const [selectedClient, setSelectedClient] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  // Pega o valor do cliente selecionado no select
  const handleClientSelect = (value) => {
    setSelectedClient(value);
  };

  const onSubmit = (data) => {
    // Criando uma instância de FormData
    const form = new FormData();
    // Carregando os valores no formulário e posterior envio pelo axios
    form.append("nr_contrato", data.nr_contrato);
    form.append("dt_assinatura", data.dt_assinatura);
    form.append("dt_inicio", data.dt_inicio);
    form.append("dt_fim", data.dt_fim);
    form.append("tipo_contrato", data.tipo_contrato);
    form.append("valor_ctr", data.valor_ctr);
    form.append("fk_cliente", selectedClient);

    axios
      .post("http://127.0.0.1:5000/contrato", form)
      .then((response) => {
        if (response.status === 200) {
          alert("Parabéns, dados inseridos com sucesso!");
        }
      })
      .catch((error) => {
        alert(`Erro na solicitação POST: ${error}`);
      });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        nr_contrato: "",
        dt_assinatura: "",
        dt_inicio: "",
        dt_fim: "",
        tipo_contrato: "",
        valor_ctr: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {/* Componente para seleção do cliente */}
      <SelectCliente onChange={handleClientSelect} />

      {/* Campos do formulário */}
      <label>Contrato:</label>
      <input
        placeholder="Preencha o número do contrato"
        {...register("nr_contrato", { required: true })}
      />
      {errors.nr_contrato && <p className="pmensagem">Campo Obrigatório!</p>}

      <label>Data Assinatura:</label>
      <input
        type="date"
        placeholder="Preencha a data de assinatura"
        {...register("dt_assinatura", { required: true })}
      />
      {errors.dt_assinatura && <p className="pmensagem">Campo Obrigatório!</p>}

      <label>Data Início:</label>
      <input
        type="date"
        placeholder="Preencha a data de início"
        {...register("dt_inicio", { required: true })}
      />
      {errors.dt_inicio && <p className="pmensagem">Campo Obrigatório!</p>}

      <label>Data Fim:</label>
      <input
        type="date"
        placeholder="Preencha a data de término"
        {...register("dt_fim", { required: true })}
      />
      {errors.dt_fim && <p className="pmensagem">Campo Obrigatório!</p>}

      <label>Tipo de contrato</label>
      <select {...register("tipo_contrato", { required: true })}>
        <option value="">Preencha o tipo de contrato</option>
        <option value="Receita">Receita</option>
        <option value="Despesa">Despesa</option>
        <option value="Outros">Outros</option>
      </select>
      {errors.tipo_contrato && <p className="pmensagem">Campo Obrigatório!</p>}

      <label>Valor do contrato</label>
      <input
        placeholder="Preencha o valor do contrato"
        {...register("valor_ctr", { required: true })}
      />
      {errors.valor_ctr && <p className="pmensagem">Campo Obrigatório!</p>}

      <BtnCadastrar
        sx={{
          width: 1000,
          color: "success.main",
          "& .MuiSlider-thumb": {
            borderRadius: "1px",
          },
        }}
      />
      <BtnCancel
        sx={{
          width: 1000,
          color: "error.main",
          "& .MuiSlider-thumb": {
            borderRadius: "1px",
          },
        }}
      />
    </form>
  );
}
