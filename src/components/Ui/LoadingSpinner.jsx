import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';

function LoadingSpinner() {
    return (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
            <CircularProgress color="inherit" size={48} />
        </Backdrop>
    );
}

export default LoadingSpinner;