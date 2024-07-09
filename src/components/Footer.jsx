import { Box, Typography, Link } from "@mui/material";

/**
 * @component Footer
 * @description rodapé que está sendo carregado em todas as páginas.
 * @param {none}
 * @return footer
 **/

function Footer() {
  return (
    <Box
      sx={{
        fontSize: "8px",
        //position:"relative",
        paddingTop: "10px",
        width: "100%",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontSize: "12px",
          backgroundColor: "#8495a7",
          color: "white",
          height: "8vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "5px",
        }}
      >
        MVP Desenvolvimento Front-end Avançado{" "}
        <Link
          href="https://especializacao.ccec.puc-rio.br/especializacao/desenvolvimento-full-stack?utm_feeditemid=&utm_device=c&utm_term=puc%20rio%20full%20stack&utm_source=google&utm_medium=ppc&utm_campaign=PUCRIO_PRF_CONV_SEARCH_POS-GRAD_Always-On_BR_CURSOS-INSTITUCIONAL&hsa_cam=20866781935&hsa_grp=156117049665&hsa_mt=b&hsa_src=g&hsa_ad=684608462294&hsa_acc=1652095629&hsa_net=adwords&hsa_kw=puc%20rio%20full%20stack&hsa_tgt=kwd-2266376752739&hsa_ver=3&gad_source=1&gclid=EAIaIQobChMI_7OG0MO3hQMVr0VIAB1kDwXSEAAYASAAEgKkxfD_BwE"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "white", textDecoration: "none", ml: 1 }}
        >
          - PUC Rio
        </Link>{" "}
        ®2024
      </Typography>
    </Box>
  );
}

export default Footer;
