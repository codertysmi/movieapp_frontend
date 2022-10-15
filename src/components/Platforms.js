
import Grid2  from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from 'react';
import Section from '../api/services/Section.js';
import Movie from '../api/services/Movies.js';
import Credit from './Credit.js';
import { useParams } from "react-router-dom";
import Tv from '../api/services/Tv.js';
import { matchRoutes, useLocation } from "react-router-dom"
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Platforms = ({ children }) => {
  const [watch_providers, setWatchProviders] = useState([]);
  let { id, media_type } = useParams(); 

  useEffect(()=>{
      const fetchPeople = async () => {
        try {
          if(media_type == "movie"){
              const data_1 = await Movie.watch_providers(id).json();
              
              setWatchProviders(data_1.results.US.flatrate)
              console.log(data_1.results.US.flatrate);
              } else if (media_type == "tv"){
                const data_2 = await Tv.watch_providers(id).json();
                
                setWatchProviders(data_2.results.US.flatrate)
                console.log(data_2.results.US);
              }
        } catch (error) {
          // Handle API errors
          setWatchProviders([])
          console.error(error);
        }
      };
      fetchPeople()
    }, [])
return (
  <Grid2 container>
    {!watch_providers ? 
    <Typography variant="h6" component="h2" gutterBottom>
      No online platforms available, maybe on cinema 🎦?
    </Typography>
    :
    <>
      {watch_providers.map((item) => (
        <Grid2 item xs={12} s={5} md={4} lg={3} xl={3}>
        <Paper elevation={0} style={{backgroundColor: "rgba(30, 30, 30, 1)", display: "flex", alignItems: "center", padding: "25px", columnGap: "20px"}}>
            <img src={`https://image.tmdb.org/t/p/original/${item.logo_path}`} style={{width: "80px", borderRadius: 32}}/>
            <Typography variant="h6" sx={{fontWeight: "550", color: "white"}}>
              {item.provider_name}
            </Typography>

        </Paper>
        </Grid2>))}
      </>}
  </Grid2>         
);
}

export default Platforms;
