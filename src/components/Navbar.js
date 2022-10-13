import Drawer from '@mui/material/Drawer';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Grid2ViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import MovieRoundedIcon from '@mui/icons-material/MovieRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';

function Navbar() {


  return (

    <Drawer variant="permanent" anchor="left" sx={{width: "138px"}}>
      <Toolbar style={{marginTop: "25px"}}>
        <Box m={1}>
          <IconButton size="large" sx={{fontSize: "50px", borderRadius: "20px"}}>
          <MovieRoundedIcon fontSize="inherit"/>
          </IconButton>
        </Box>
      </Toolbar>
      <div style={{display: "flex", flexDirection: "column", rowGap: "25px", marginTop: "45%"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
          <IconButton size="large" sx={{borderRadius: "20px"}}>
            <Grid2ViewRoundedIcon fontSize="inherit"/>
          </IconButton>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <IconButton size="large" sx={{borderRadius: "20px"}}>
            <PersonRoundedIcon fontSize="inherit"/>
          </IconButton>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <IconButton size="large" sx={{borderRadius: "20px"}}>
            <SettingsRoundedIcon fontSize="inherit"/>
          </IconButton>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <IconButton size="large" sx={{borderRadius: "20px"}}>
            <RestoreRoundedIcon fontSize="inherit"/>
          </IconButton>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <IconButton size="large" sx={{borderRadius: "20px"}}>
            <BookmarkRoundedIcon sx={{opacity: "0.7"}} fontSize="inherit"/>
          </IconButton>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <IconButton size="large" sx={{borderRadius: "20px"}}>
            <MenuOpenRoundedIcon fontSize="inherit"/>
          </IconButton>
        </div>
      </div>
    </Drawer>
  );
}

export default Navbar;
