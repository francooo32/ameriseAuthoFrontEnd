import styles from "./LandingPage.module.css";
import { useNavigate } from "react-router-dom";
import Cover from "../../components/cover/cover.jsx"
import Cards from "../../components/cards/cards.jsx"
import SellSection from "../../components/sellsection/sellsection.jsx"

const DATA = [
    { title: "Te damos 3 meses de cobertura mecanica", description: "Y podes extenderla hasta 12 meses", image: "/images/tres.jpg" },
    { title: "Certificamos todos nuestros autos", description: "Inpesccionamos nuestros autos para asegurar la calidad", image: "/images/uno.jpg" },
    { title: "Financia a tu medida", description: "Trabajamos con las mejores opciones", image: "/images/dos.jpg" }
];

function LandingPage() {
    const navigate = useNavigate();

    return(
        <>      
             {/* <div className="Home"> */}
                <Cover/>
                {/* <Cards/> */}
                <SellSection/>
            {/* </div> */}
            {/* <section className={styles.section_container}>
                <Stack direction="column" spacing={2}>
                    <Typography variant="h4" component="div">
                        Palmerson
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

            <Stack direction="row" justifyContent="space-between" sx={{padding: 6}}>
                <Stack direction="column" spacing={2} alignItems="start">
                    <Typography variant="body2" color="text.main" textAlign="center">
                        Dirección: Av. Pres. Perón 3001, Morón, Provincia de Buenos Aires
                    </Typography>

                    <Typography variant="body2" color="text.main" textAlign="center">
                        Telefono: 011 4443-8143
                    </Typography>

                    <Typography variant="body2" color="text.main" textAlign="center">
                        Horario: 09:00 a 18:00
                    </Typography>
                </Stack>

                <Stack direction="row" alignItems="center">
                    
                <a href="https://www.facebook.com/palmersonautomotoresok" rel="noopener" target='_blank'> 
                    <IconButton aria-label="Facebook">
                        <Facebook />
                    </IconButton>
                    </a>   

                    <a href="https://www.instagram.com/palmerson.oficial/?hl=es" rel="noopener" target='_blank'> 
                    <IconButton aria-label="Instagram">
                        <Instagram />
                    </IconButton>
                    </a>   
                </Stack>
            </Stack> */}
        </>
    );
}

export default LandingPage;