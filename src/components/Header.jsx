import { Box, Typography } from '@mui/material';

/**
 * @component Header
 * @description cabeçalho que está sendo carregado em todas as páginas.
 * @param {none}
 * @return header
 **/

function Header() {
  return (
    <Box
    sx={{
        height: '15vh',
        textAlign: 'left',
        color: 'aliceblue',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url('/contrato.jpg')`,
        overflow: 'hidden',
      
      }}
    >
      <Typography variant="h4"
      sx={{
        textAlign: 'left',
            }}>
        Gestão Multicloud - MVP{' '}
      </Typography>
    </Box>
  );
}

export default Header;