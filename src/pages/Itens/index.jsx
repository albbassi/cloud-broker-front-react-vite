import { Box, Typography } from "@mui/material";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import FormItem from "../../components/FormItem";
import MenuPrincipal from "../../components/MenuPrincipal";


function Itens() {
  return (
    <>
      <Header />
      <br />
      <MenuPrincipal />
      <Box
        sx={{
          textAlign: "center",
          paddingTop: "5vh",
        }}
      >
        <Typography variant="h4">Cadastrar Novo Item</Typography>
        <section>
          <Typography variant="h6">Preencha os campos abaixo</Typography>
          <FormItem />
        </section>
      </Box>
      <Footer />
    </>
  );
}

export default Itens;
