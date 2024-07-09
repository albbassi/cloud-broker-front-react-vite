/* eslint-disable react/prop-types */

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

/**
   * @component BtnVoltar
   * @description Component botão que será responsavel por levar à página anterior
   * @param onclick -> função que será executada pelo component que está chamando 
   * @param desabilita -> estado do botão na chamada do component
   * @returns Retorna um component botão
   **/

function BtnVoltar({ onClick, desabilita }) {
  

  return (
    <Stack direction="row" spacing={12}>
      <Button
        variant="contained"
        startIcon={<KeyboardDoubleArrowLeftIcon />}
        disabled={desabilita}
        onClick={onClick}
        sx={{width:100}}
      >
        voltar
      </Button>
    </Stack>
  );
}

export default BtnVoltar;
