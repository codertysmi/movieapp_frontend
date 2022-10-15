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
import { NavLink } from "react-router-dom";

function Navbar() {


  return (

    <Drawer hideBackdrop variant="permanent" anchor="left" sx={{width: "138px"}} PaperProps={{
      sx: {
        border: 0,
        backgroundColor: "rgba(27, 27, 27, 1)",
        color: "red",
      }
    }}>
      <Toolbar style={{marginTop: "25px"}}>
        <Box m={1}>
          <NavLink end to="/" style={({ isActive }) => ({color: "white"})}>
          <MovieRoundedIcon fontSize="inherit" sx={{fontSize: "50px"}}/>
          </NavLink>
        </Box>
      </Toolbar>
      <div style={{display: "flex", flexDirection: "column", rowGap: "25px", marginTop: "45%"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
          <NavLink end to="/" style={({ isActive }) => ({backgroundColor: isActive ? "rgba(60, 60, 60, .54)" : "", borderRadius: 20})}>
          <IconButton size="large" sx={{borderRadius: "20px"}}>
            <Grid2ViewRoundedIcon fontSize="inherit"/>
          </IconButton>
          </NavLink>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
        <NavLink end to="/profile" style={({ isActive }) => ({backgroundColor: isActive ? "rgba(60, 60, 60, .54)" : "", borderRadius: 20})}>
          <IconButton size="large" sx={{borderRadius: "20px"}}>
            <PersonRoundedIcon fontSize="inherit"/>
          </IconButton>
          </NavLink>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
        <NavLink end to="/configuration" style={({ isActive }) => ({backgroundColor: isActive ? "rgba(60, 60, 60, .54)" : "", borderRadius: 20})}>
          <IconButton size="large" sx={{borderRadius: "20px"}}>
            <SettingsRoundedIcon fontSize="inherit"/>
          </IconButton>
          </NavLink>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
        <NavLink end to="/activity" style={({ isActive }) => ({backgroundColor: isActive ? "rgba(60, 60, 60, .54)" : "", borderRadius: 20})}>
          <IconButton size="large" sx={{borderRadius: "20px"}}>
            <RestoreRoundedIcon fontSize="inherit"/>
          </IconButton>
          </NavLink>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
        <NavLink end to="/favorites" style={({ isActive }) => ({backgroundColor: isActive ? "rgba(60, 60, 60, .54)" : "", borderRadius: 20})}>
          <IconButton size="large" sx={{borderRadius: "20px"}}>
            <BookmarkRoundedIcon sx={{opacity: "0.7"}} fontSize="inherit"/>
          </IconButton>
          </NavLink>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
        <NavLink end to="/logout" style={({ isActive }) => ({backgroundColor: isActive ? "rgba(60, 60, 60, .54)" : "", borderRadius: 20})}>
          <IconButton size="large" sx={{borderRadius: "20px"}}>
            <MenuOpenRoundedIcon fontSize="inherit"/>
          </IconButton>
          </NavLink>
        </div>
      </div>
    </Drawer>
  );
}

export default Navbar;
