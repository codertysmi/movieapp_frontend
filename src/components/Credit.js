import Grid2  from "@mui/material/Unstable_Grid2";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from 'react';



function Credit(props) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
        <Paper sx={{ minWidth: "100%", height: "300px", position: "relative"}}>
            <div style={theme.palette.mode === 'light' ? {boxShadow: "rgb(103 116 142 / 8%) 0rem 0rem 1rem 0rem", width: "100%", height: "100%", position:"absolute", borderRadius: 20, backgroundPosition: "bottom", backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.poster_path})`} : { width: "100%", height: "100%", position:"absolute", borderRadius: 20, backgroundPosition: "bottom", backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.poster_path})`}}>
            </div>
            
        </Paper>
        <div style={isMobile ? {display: "flex", alignItems: "left", flexDirection: "column", justifyContent: "left", alignContent: "left", marginTop: "10px"} : {display: "flex", justifyContent: "left", alignContent: "left", alignItems: "left", flexDirection: "column", justifyContent: "space-between", marginTop: "10px"}}>
            <Typography  variant="h3" style={{fontWeight: "600", fontSize: "20px"}}>{props.title}</Typography>
            <div style={{display: "flex", alignItems: "center", columnGap: "10px"}}>
            <Typography   variant="h3" style={{fontWeight: "400", fontSize: "15px", opacity: "0.7"}}>{props.name}</Typography>
        </div>
            
    </div>
    </>
  );
}

export default Credit;