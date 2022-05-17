import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import ContactDialog from '../../ContactDialog';

const DATA = {id: 1, title: "Shrimp and Chorizo Paella", image: "/images/car.jpg", description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."};

function CarDetail() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <Stack direction="row" alignItems="center">
            <ContactDialog open={open} onClose={handleClose}/>

            <Box>
                <img src={DATA.image} alt="Logo" style={{width: 500}} />
            </Box>

            <Stack direction="column" justifyContent="space-between">
                <Box>
                    <Typography variant="h4" component="div">
                        {DATA.title}
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
        </Stack>
    );
}

export default CarDetail;