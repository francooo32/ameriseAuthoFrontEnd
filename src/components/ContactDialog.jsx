import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

function ContactDialog({ onClose, open }) {

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Dejanos tus datos</DialogTitle>

        <DialogContent>
            <DialogContentText>Un asesor se contactará con vos a la brevedad</DialogContentText>

            <TextField autoFocus margin="dense" id="name" label="Nombre" type="text" fullWidth variant="standard"/>
            <TextField margin="dense" id="lastname" label="Apellido" type="text" fullWidth variant="standard"/>
            <TextField margin="dense" id="email" label="Email" type="email" fullWidth variant="standard"/>
            <TextField margin="dense" id="telephone" label="Telefono" type="text" fullWidth variant="standard"/>
            <TextField margin="dense" id="message" label="Mensaje (opcional)" type="text" fullWidth variant="standard"/>
        </DialogContent>

        <DialogActions>
            <Button onClick={handleClose}>CANCELAR</Button>
            <Button onClick={handleClose} variant="contained">ENVIAR</Button>
        </DialogActions>
    </Dialog>
  );
}

export default ContactDialog;
