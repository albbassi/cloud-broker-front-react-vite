import { Box, Typography } from "@mui/material";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FormCliente from "../../components/FormCliente";
import MenuPrincipal from "../../components/MenuPrincipal";

function Cliente() {
  return (
    <>
      <Header />
    <br></br>
    <MenuPrincipal/>
      <Box
        sx={{
          textAlign: "center",
          paddingTop: "5vh",
        }}
      >
        <Typography variant="h4">Cadastrar Novo Cliente</Typography>
        <section>
          <Typography variant="h6">Preencha os campos abaixo</Typography>
          <FormCliente />
        </section>
      </Box>
      <Footer />
    </>
  );
}

export default Cliente;
