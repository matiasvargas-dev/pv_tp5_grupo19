import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
const AboutLayout = ({ children }) => {
 return (
 <Box sx={{ background: "#f8fafc", minHeight: "100vh", py: 6 }}>
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>
        Acerca del Grupo
      </Typography>
      {children}
    </Container>
  </Box>
);
};

export default AboutLayout;
