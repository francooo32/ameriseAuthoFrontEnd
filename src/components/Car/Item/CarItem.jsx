import { useNavigate } from 'react-router-dom';;

function Car({car}) {
    const navigate = useNavigate();

    function cardClickHandler() {
        navigate("/detalle");
    }

    function favoriteClickHandler(e) {
        e.stopPropagation();
    }
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