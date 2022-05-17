import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';;

function Car({car}) {
    const navigate = useNavigate();

    function cardClickHandler() {
        navigate("/detalle");
    }

    function favoriteClickHandler(e) {
        e.stopPropagation();
        console.log("Favorito clickeado");
    }

    return(
        <Card sx={styles.card} onClick={cardClickHandler}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={car.title}
                subheader="September 14, 2016"
            />

            <CardMedia component="img" height="194" image="/images/car.jpg" alt="Paella dish" />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {car.description}
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={favoriteClickHandler}>
                    <FavoriteIcon />
                </IconButton>

                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Car;

const styles = {
    card: {
        maxWidth: 345,
        '&:hover': {
            cursor: 'pointer'
        }
    }
}