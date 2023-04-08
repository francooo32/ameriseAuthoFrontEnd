import { useNavigate } from 'react-router-dom';

function MainToolbar() {
  const navigate = useNavigate();
  
  // return (
  //   <Box sx={{ flexGrow: 1 }}>
  //     <AppBar position="static">
  //       <Toolbar>
  //         <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, display: {lg: "none"} }}>
  //           <MenuIcon />
  //         </IconButton>

  //         <img src="/images/palmerson-logo-removebg-preview.png" alt="Logo" style={{width: 56}} onClick={() => navigate("/")} />
  //       </Toolbar>
  //     </AppBar>
  //   </Box>
  // );
}

export default MainToolbar;