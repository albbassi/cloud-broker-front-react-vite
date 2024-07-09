/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import CancelOutlined from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

/**
 * @component BtnCancel
 * @description Component botão que será responsavel por cancelar a ação atual
 * @param sx -> configuração de css customizada
 * @returns Retorna um component botão
 **/

export default function BtnCancel({ sx }) {
  const navigate = useNavigate();

  const voltar = () => {
    navigate("/", { replace: true });
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      alignContent={"center"}
      alignItems={"center"}
    >
      <Button
        variant="outlined"
        onClick={voltar}
        startIcon={<CancelOutlined />}
        sx={sx}
      >
        Cancelar
      </Button>
    </Stack>
  );
}
