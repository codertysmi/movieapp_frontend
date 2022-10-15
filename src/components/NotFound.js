import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Grid2  from "@mui/material/Unstable_Grid2";
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Navbar.js';


function NotFound(props) {



  return (
    <Box sx={{display: "flex"}}>
      <CssBaseline/>
    <Navbar/>
    <Box component="main" m={8} sx={{flexGrow: 1, marginTop: "25px"}}>

        <Grid2 container spacing={2} rowSpacing={7} columnSpacing={3} sx={{marginTop: "50px"}}>
            <Grid2 item xs={12} lg={12}>
            <Typography variant="h4" sx={{fontWeight: "550"}}>
                Uh oh! We couldn't find what you were looking for, maybe this page is still under construction.
            </Typography>
            </Grid2>
        </Grid2>
        
    </Box>
    </Box>
  );
}

export default NotFound;
