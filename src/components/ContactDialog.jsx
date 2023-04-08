// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogActions from '@mui/material/DialogActions';
// import { useFormik } from 'formik';

// function ContactDialog({ onClose, open }) {
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       lastname: '',
//       email: '',
//       phone: '',
//       message: '',
//     },
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });

//   const handleClose = () => {
//     onClose();
//   };

//   return (
//     <Dialog onClose={handleClose} open={open}>
//         <DialogTitle>Dejanos tus datos</DialogTitle>

//         <DialogContent>
//             <DialogContentText>Un asesor se contactará con vos a la brevedad</DialogContentText>

//             <form onSubmit={formik.handleSubmit}>
//               <TextField autoFocus margin="dense" id="name" label="Nombre" type="text" fullWidth variant="standard" onChange={formik.handleChange} value={formik.values.name} />
//               <TextField margin="dense" id="lastname" label="Apellido" type="text" fullWidth variant="standard" onChange={formik.handleChange} value={formik.values.lastname} />
//               <TextField margin="dense" id="email" label="Email" type="email" fullWidth variant="standard" onChange={formik.handleChange} value={formik.values.email} />
//               <TextField margin="dense" id="phone" label="Telefono" type="text" fullWidth variant="standard" onChange={formik.handleChange} value={formik.values.phone} />
//               <TextField margin="dense" id="message" label="Mensaje (opcional)" type="text" fullWidth variant="standard" onChange={formik.handleChange} value={formik.values.message} />
//             </form>
//         </DialogContent>

//         <DialogActions>
//             <Button onClick={handleClose}>CANCELAR</Button>
//             <Button onClick={formik.handleSubmit} variant="contained">ENVIAR</Button>
//         </DialogActions>
//     </Dialog>
//   );
// }

// export default ContactDialog;
