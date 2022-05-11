import styles from "./LandingPage.module.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

const DATA = [
    { title: "Te damos 3 meses de cobertura mecanica", description: "Y podes extenderla hasta 12 meses", image: "/images/tres.jpg" },
    { title: "Certificamos todos nuestros autos", description: "Inpesccionamos nuestros autos para asegurar la calidad", image: "/images/uno.jpg" },
    { title: "Financia a tu medida", description: "Trabajamos con las mejores opciones", image: "/images/dos.jpg" }
];

function LandingPage() {
    const navigate = useNavigate();

    return(
        <> 
            <section className={styles.section_container}>
                <Stack direction="column" spacing={2}>
                    <Typography variant="h4" component="div">
                        Palmersons
                    </Typography>

                    <Typography variant="body1">
                        Encontramos el auto que estas buscando. Cambiar o vender tu auto, es rápido y fácil.
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        <Button variant="contained">Vender</Button>
                        <Button variant="contained" onClick={() => navigate("comprar")}>Comprar</Button>
                    </Stack>
                </Stack>

                <Stack>
                    <img src="/images/lamborghini.png" alt="Lambo" className={styles.image} />
                </Stack>
            </section>

            <Box sx={{display: "flex", flexDirection: "column", gap: 4, padding: 4, backgroundColor: "primary.main"}}>
                <Typography variant="h4" component="div" textAlign="center" sx={{color: "white"}}>
                    Por que elegirnos
                </Typography>

                <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={4}>
                    {DATA.map(item =>
                        <Card key={item.title} sx={{ maxWidth: 345 }} raised>
                            <CardMedia component="img" height="140" image={item.image} alt="Auto" />

                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" textAlign="center">
                                    {item.title}
                                </Typography>

                                <Typography variant="body2" color="text.main" textAlign="center">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    )}
                </Stack>  
            </Box>
        </>
    );
}

export default LandingPage;