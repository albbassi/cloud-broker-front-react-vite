import { useForm } from "react-hook-form";

import { useEffect } from "react";

import axios from "axios";

import BtnCancel from "./BtnCancel";
import BtnCadastrar from "./BtnCadastrar";
import "./FormGeral.css";

export default function FormCliente() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
    formState: { isSubmitSuccessful },
  } = useForm();

  const cnpjValue = watch("cnpj", "");

  const formataCnpj = (value) => {
    return value
      .replace(/\D/g, "") // Remove não dígitos
      .replace(/(\d{2})(\d)/, "$1.$2") // insere ponto após os dois primeiros dígitos
      .replace(/(\d{3})(\d)/, "$1.$2") // insere ponto após os três dígitos seguintes
      .replace(/(\d{3})(\d)/, "$1/$2") // insere barra após os três dígitos seguintes
      .replace(/(\d{4})(\d{1,2})$/, "$1-$2"); // insere hífen antes dos últimos dois dígitos
  };

  const handleCNPJChange = (event) => {
    const formatadoCnpj = formataCnpj(event.target.value);
    setValue("cnpj", formatadoCnpj);
  };

  const onSubmit = (data) => {
    const form = new FormData();
    form.append("cnpj", data.cnpj);
    form.append("nome", data.nome);
    form.append("localizacao", data.localizacao);

    axios
      .post("http://127.0.0.1:5000/cliente", form)
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
      reset({ nome: "", cnpj: "", localizacao: "" });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label>Cliente:</label>
      <input
        placeholder="Preencha o nome do cliente"
        {...register("nome", { required: true })}
      />
      {errors.nome && <p className="pmensagem">Campo Obrigatório!</p>}
      <label>CNPJ:</label>
      <input
        placeholder="Preencha o CNPJ do cliente"
        {...register("cnpj", { required: true })}
        value={cnpjValue}
        onChange={handleCNPJChange}
      />
      {errors.cnpj && <p className="pmensagem">Campo Obrigatório!</p>}
      <label>Localização</label>
      <input
        placeholder="Preencha a localização do cliente"
        {...register("localizacao", { required: true })}
      />
      {errors.localizacao && <p className="pmensagem">Campo Obrigatório!</p>}

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
