import { Box, Typography } from "@mui/material";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FormContrato from "../../components/FormContrato";
import MenuPrincipal from "../../components/MenuPrincipal";


function Contratos() {
  return (
    <>
      <Header />
      <br />
      <MenuPrincipal />
      <Box
        sx={{
          textAlign: "center",
          paddingTop: "5vh",
          height: "100vh",
        }}
      >
        <Typography variant="h4">Cadastrar Novo Contrato</Typography>
        <section>
          <Typography variant="h6">Preencha os campos abaixo</Typography>
          <FormContrato />
        </section>
      </Box>
      <Footer />
    </>
  );
}

export default Contratos;
