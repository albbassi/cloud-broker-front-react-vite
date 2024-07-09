/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import Stack from "@mui/material/Stack";

/**
 * @component BtnCadastrar
 * @description Component botão que será responsavel por persistir as informações na base
 * @param sx -> configuração de css customizada
 * @returns Retorna um component botão
 **/

export default function BtnCadastrar({ sx }) {
  const enviar = (data) => {
    console.log(data);
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      alignContent={"center"}
      alignItems={"center"}
      paddingTop={1}
      paddingBottom={1}
    >
      <Button
        variant="contained"
        color="inherit"
        type="submit"
        onClick={enviar}
        startIcon={<IosShareOutlinedIcon />}
        sx={sx}
      >
        Cadastrar
      </Button>
    </Stack>
  );
}
