import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Grid2  from "@mui/material/Unstable_Grid2";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useState } from 'react';
import Navbar from './Navbar.js';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import Movie from '../api/services/Movies.js';
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {  useLocation } from "react-router-dom"
import Tv from '../api/services/Tv.js';
import { NavLink } from "react-router-dom";

const Details = ({ children }) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [details, setDetails] = useState([])
  const [credits, setCredits] = useState([])
  let { id, media_type } = useParams(); 
  const location = useLocation()
  useEffect(()=>{
    const fetchPeople = async () => {
      try {
        if(media_type == "movie"){
        const data = await Movie.details(id).json();
        console.log(data)
        setDetails(data)
        } else if (media_type == "tv"){
          const data = await Tv.details(id).json();
          console.log(data)
          setDetails(data)
        }
      } catch (error) {
        // Handle API errors
        console.error(error);
      }
    };
    fetchPeople()
  }, [id])

  return (
    <Box sx={{display: "flex"}}>
      <CssBaseline/>
    <Navbar/>
    <Box component="main" m={8} sx={{flexGrow: 1, marginTop: "100px"}}>

      <Grid2 container spacing={2} rowSpacing={7} columnSpacing={3} >
        <Grid2 item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div style={{ width: "100%", minHeight: "450px", height: "100%", position: "relative"}}>
                <div style={theme.palette.mode === 'light' ? {width: "100%", height: "100%", position:"absolute", boxShadow: "rgb(103 116 142 / 8%) 0rem 0rem 1rem 0rem", borderRadius: 32, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundImage: `url(https://image.tmdb.org/t/p/original/${details.backdrop_path})`} : 
                {width: "100%", height: "100%", position:"absolute",  borderRadius: 32, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundImage: `url(https://image.tmdb.org/t/p/original/${details.backdrop_path})`}}>
                  <div style={theme.palette.mode === 'light' ? {backdropFilter: "blur(7px)",  padding: "50px", backgroundColor: "rgba(237, 234, 222, .2)", height: "100%", width: "100%", borderRadius: 32, position: "relative"} : {backdropFilter: "blur(15px)", padding: "50px", backgroundColor: "rgba(18, 18, 18, .6)", height: "100%", width: "100%", borderRadius: 32, position: "relative"}}>
                    <div>
                      <Grid2 container spacing={0} rowSpacing={0} columnSpacing={3} >
                        <Grid2 item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <Paper sx={{ height: "300px", position: "relative"}}>
                            <div style={theme.palette.mode === 'light' ? {boxShadow: "rgb(103 116 142 / 8%) 0rem 0rem 1rem 0rem", width: "100%", height: "100%", position:"absolute", borderRadius: 20, backgroundPosition: "bottom", backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundImage: `url(https://image.tmdb.org/t/p/original/${details.poster_path})`} : { width: "100%", height: "100%", position:"absolute", borderRadius: 20, backgroundPosition: "bottom", backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundImage: `url(https://image.tmdb.org/t/p/original/${details.poster_path})`}}>
                            </div>
                            
                        </Paper>
                        </Grid2>
                        <Grid2 item xs={12} sm={6} md={8} lg={9} xl={10}>
                          <div style={isMobile ? {display: "flex", alignItems: "left", flexDirection: "column", justifyContent: "left", alignContent: "left"} : {display: "flex", justifyContent: "left", alignContent: "left", alignItems: "left", flexDirection: "column", justifyContent: "space-between"}}>
                              <Typography  variant="h3" style={{fontWeight: "600", fontSize: "40px"}}>{details.title}{details.name}</Typography>
                              <div style={isMobile ? {display: "flex", flexDirection: "column", alignItems: "center", columnGap: "10px"} : {display: "flex", alignItems: "center", columnGap: "30px"}}>
                                <Typography   variant="h3" style={{fontWeight: "400", fontSize: "18px", opacity: "0.7"}}>{details.release_date ? <div>{details.release_date}</div> : <></>}{details.first_air_date ? <div>{details.first_air_date}</div> : <></>}</Typography>
                                {<Typography variant="h3" style={{fontWeight: "400", fontSize: "18px", opacity: "0.7", textTransform: "capitalize"}}>{media_type}</Typography>}
                                {details.genres ? <div style={isMobile ? {display: "flex", flexDirection: "column", alignItems: "center", columnGap: "10px"} : {display: "flex", alignItems: "center", columnGap: "9px"}}>
                                {details.genres.map((genre, index)=>{
                                  return(
                                    <Typography key={index} variant="h3" style={{fontWeight: "400", fontSize: "18px", opacity: "0.7"}}>{genre.name}{index+1 < details.genres.length ? <>,</>: null}</Typography>
                                  )
                                })}
                                </div>
                                : <></>}
                                {details.runtime ? <Typography variant="h3" style={{fontWeight: "400", fontSize: "18px", opacity: "0.7"}}>• {details.runtime} min</Typography> : <></>}

                              </div>
                              <div style={isMobile? {display: "flex", flexDirection: "column", alignItems: "center"} : {display: "flex", flexDirection: "row", alignItems: "center", marginTop: "15px"}}>
                                    <Paper style={theme.palette.mode === 'light' ? {backdropFilter: "blur(10px)", backgroundColor: "rgba(237, 234, 222, .2)",width: "40%", display: "flex", flexDirection: "row", alignItems: "center", margin: "5px", padding: "5px", columnGap: "5px", borderRadius: "12.5px"} : {backdropFilter: "blur(5px)", backgroundColor: "rgba(18, 18, 18, .4)", minWidth: "115px", width: "9%", display: "flex", flexDirection: "row", alignItems: "center", margin: "5px", padding: "5px", columnGap: "5px", borderRadius: "12.5px"}}>
                                      <StarIcon color="primary" sx={{width: "20px"}}/>
                                      <Typography variant="h3" style={{marginLeft: "2px", fontWeight: "400", fontSize: "17px", opacity: "0.7"}}>{details.vote_average ? <div>{details.vote_average.toFixed(2)} / 10</div> : <>Na</>}</Typography>
                                    </Paper>
                                    <Button startIcon={<PlayCircleRoundedIcon/>} variant="contained" style={{marginLeft: "15px", color: "white", fontWeight: "700", fontSize: "17px", padding: "4px 15px"}}>Trailer</Button>
                              </div>
                              <Typography variant="h2"  style={{color: "white", fontWeight: "700", fontSize: "35px", marginTop: "15px"}}>Overview</Typography>
                              <Typography variant="subtitle1"  style={{color: "white",  fontSize: "17px"}}>{details.overview}</Typography>
                          </div>
                        </Grid2>
                      </Grid2>
                    </div>
                  </div>
                </div>
          </div>
        </Grid2>
        <Grid2 xs={12} sx={{ marginTop: "25px", display: "flex", columnGap: "20px", justifyContent: "center"}}>
            <NavLink end to="" style={({ isActive }) => ({textDecoration:  "none", fontWeight: isActive ? 'bold' : 'normal', color: "white", backgroundColor: isActive ?  "#fb6340" : "rgba(27, 27, 27, 1)", borderRadius: 32})}>
            <Button  variant="" elevation={0} style={{backgroundColor: "inherit", minWidth:"250px", width: "2%", height: "50px", display: "flex", columnGap: "20px", justifyContent: "center", alignItems: "center"}}>
              <Typography  variant="h2" sx={{textTransform: "initial", fontSize: "20px", fontWeight: "inherit"}}>
                Credits
              </Typography>
              </Button>
            </NavLink>
            <NavLink end to="platforms" style={({ isActive }) => ({textDecoration:  "none", fontWeight: isActive ? 'bold' : 'normal', color: "white", backgroundColor: isActive ?  "#fb6340" : "rgba(27, 27, 27, 1)", borderRadius: 32})}>
              <Button variant="" elevation={0} style={{backgroundColor: "inherit", minWidth:"250px", width: "5%", height: "50px", display: "flex", columnGap: "20px", justifyContent: "center", alignItems: "center"}}>
              <Typography  variant="h2" sx={{textTransform: "initial", fontSize: "20px", fontWeight: "inherit"}}>
                Platforms
              </Typography>
            </Button>   
            </NavLink>
            <NavLink end to="similar" style={({ isActive }) => ({textDecoration:  "none", fontWeight: isActive ? 'bold' : 'normal', color: "white", backgroundColor: isActive ?  "#fb6340" : "rgba(27, 27, 27, 1)", borderRadius: 32})}>
              <Button variant="" elevation={0} style={{backgroundColor: "inherit", minWidth:"250px", width: "5%", height: "50px", display: "flex", columnGap: "20px", justifyContent: "center", alignItems: "center"}}>
              <Typography  variant="h2" sx={{textTransform: "initial", fontSize: "20px", fontWeight: "inherit"}}>
                Similar
              </Typography>
            </Button>   
            </NavLink>
        </Grid2>
        <Grid2 item xs={12}>
          <Outlet />
        </Grid2>
      </Grid2>
        
    </Box>
    </Box>
  );
}

export default Details;
