import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState } from 'react';
import ContactDialog from '../../ContactDialog';
import ListItems from '../../../components/List/ListItems/ListItems.jsx';

const DATA = {id: 1, title: "Bmw", image: "/images/newCars/bmw.jpg", description: "Casi sin uso, cuidado y con chapa perfecta, motor solo con 1 año de uso, bateria y llantas nuevas."};
const DATA2 = [
    { title: "Te damos 3 meses de cobertura mecanica", description: "Y podes extenderla hasta 12 meses", image: "/images/tres.jpg" },
    { title: "Certificamos todos nuestros autos", description: "Inpesccionamos nuestros autos para asegurar la calidad", image: "/images/uno.jpg" },
    { title: "Financia a tu medida", description: "Trabajamos con las mejores opciones", image: "/images/dos.jpg" }
];

function CarDetail({item: { coverSrc, brand, model, price, km, rating, location }}) {
    const item = ListItems;
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    return(
        <>
        <Stack direction="row" alignItems="center">
            <ContactDialog open={open} onClose={handleClose} />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 4, padding: 4 }}>
                <img src={DATA.image} alt="Logo" style={{ width: 500 }} />
            </Box>

            <Stack direction="column" justifyContent="space-between">
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4, padding: 4 }}>
                    <Typography variant="h4" component="div" alignSelf="center">
                        {item.brand}
                    </Typography>

                    <Typography variant="p" component="div">
                        {DATA.description}
                    </Typography>

                    <Typography variant="p" component="div">
                        PRECIO: A CONSULTAR
                    </Typography>
                </Box>

                <Button variant="outlined" onClick={handleClickOpen}>CONSULTAR</Button>
            </Stack>
        </Stack><Box sx={{ display: "flex", flexDirection: "column", gap: 4, padding: 4, backgroundColor: "primary.main" }}>
                <Typography variant="h4" component="div" textAlign="center" sx={{ color: "white" }}>
                    Por que elegirnos
                </Typography>

                <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={4}>
                    {DATA2.map(item => <Card key={item.title} sx={{ maxWidth: 345 }} raised>
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

export default CarDetail;