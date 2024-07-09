//importe do react e do react form
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

//importe do axios para as requisições
import axios from "axios";

//importe dos componentes de botão
import BtnCancel from "./BtnCancel";
import BtnCadastrar from "./BtnCadastrar";

//importe do componente select
import SelectContrato from "./SelectContrato";

// importe do CSS geral
import "./FormGeral.css";

//Função principal do formulario
export default function FormItem() {

  const [selectedContrato, setSelectedContrato] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    formState: { isSubmitSuccessful },
  } = useForm();

  //Pega o valor do cliente selecionado no select
  const handleContratoSelect = (value) => {
    setSelectedContrato(value);
  };

  const onSubmit = (data) => {
    //criando uma instâcia de FormData
    const form = new FormData();
    //carregando os valores no formulario e posterior envio pelo axios
    form.append("fk_contrato", selectedContrato);
    form.append("nome_item", data.nome_item);
    form.append("quantidade", data.quantidade);
    form.append("valor_unitario", data.valor_unitario);
    
    axios
      .post("http://127.0.0.1:5000/item_contrato", form)
      .then((data) => {
        if (data.statusText === "OK") {
          alert("Parabéns, dados inseridos com sucesso!");
        }
      })
      .catch((error) => {
        alert(("Erro na solicitação POST:", error));
      });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        nome_item: "",
        quantidade: "",
        valor_unitario: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {/* component para seleção do contrato */}
      <SelectContrato onChange={handleContratoSelect} />

      {/* compos do formulário */}
      <label>Item contratado:</label>
      <input
        placeholder="Preencha o número do item"
        {...register("nome_item", { required: true })}
      />
      {errors.nome_item && <p className="pmensagem">Campo Obrigatório!</p>}
      <label>Quantidade contratada</label>
      <input
        placeholder="Preencha a quantidade contratada"
        {...register("quantidade", { required: true })}
      />
      {errors.quantidade && <p className="pmensagem">Campo Obrigatório!</p>}
      <label>Valor unitário</label>
      <input
        placeholder="Preencha o valor unitário"
        {...register("valor_unitario", { required: true })}
      />
      {errors.valor_unitario && <p className="pmensagem">Campo Obrigatório!</p>}

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
          color: "success.main",
          "& .MuiSlider-thumb": {
            borderRadius: "1px",
          },
        }}
      />
    </form>
  );
}
