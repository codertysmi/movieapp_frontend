import Grid2  from "@mui/material/Unstable_Grid2";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from 'react';



function SectionItems(props) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid2 sx={12} s={4} md={4} lg={1.714} sx={{display: "flex", flexDirection: "column", rowGap: "10px", width: "100%"}}>
        <Paper sx={{ minWidth: "100%", height: "300px", position: "relative"}}>
            <div style={theme.palette.mode === 'light' ? {boxShadow: "rgb(103 116 142 / 8%) 0rem 0rem 1rem 0rem", width: "100%", height: "100%", position:"absolute", borderRadius: 20, backgroundPosition: "bottom", backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.item.poster_path})`} : { width: "100%", height: "100%", position:"absolute", borderRadius: 20, backgroundPosition: "bottom", backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.item.poster_path})`}}>
            <div></div>
            <Paper  style={theme.palette.mode === 'light' ? {backdropFilter: "blur(10px)", backgroundColor: "rgba(237, 234, 222, .2)",width: "40%", display: "flex", flexDirection: "row", alignItems: "center", margin: "5px", padding: "5px", columnGap: "5px", borderRadius: "12.5px"} : {backdropFilter: "blur(5px)", backgroundColor: "rgba(18, 18, 18, .5)",width: "40%", display: "flex", flexDirection: "row", alignItems: "center", margin: "5px", padding: "5px", columnGap: "5px", borderRadius: "12.5px"}}>
                <StarIcon color="primary" sx={{width: "20px"}}/>
                <Typography variant="h3" style={theme.palette.mode === 'light' ? {fontWeight: "400", fontSize: "15px", opacity: "0.8", color: "white"} : {fontWeight: "400", fontSize: "15px", opacity: "0.7"}}>{props.item.vote_average ? <div>{props.item.vote_average.toFixed(2)}</div> : <>Na</>}</Typography>
            </Paper>
            </div>
            
        </Paper>
        <div style={isMobile ? {display: "flex", alignItems: "left", flexDirection: "column", justifyContent: "left", alignContent: "left"} : {display: "flex", justifyContent: "left", alignContent: "left", alignItems: "left", flexDirection: "column", justifyContent: "space-between"}}>
            <Typography  variant="h3" style={{fontWeight: "600", fontSize: "20px"}}>{props.item.title}{props.item.name}</Typography>
            <div style={{display: "flex", alignItems: "center", columnGap: "10px"}}>
            <Typography   variant="h3" style={{fontWeight: "400", fontSize: "15px", opacity: "0.7"}}>{props.item.release_date ? <div>{props.item.release_date.substring(0, 4)}</div> : <></>}{props.item.first_air_date ? <div>{props.item.first_air_date.substring(0, 4)}</div> : <></>}</Typography>
        </div>
            
    </div>
    </Grid2>
  );
}

export default SectionItems;