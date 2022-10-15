
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
import { useOutletContext } from "react-router-dom";
import Paper from '@mui/material/Paper';
import SectionItems from "./SectionItems.js";


const Platforms = ({ children }) => {
  const [recomendations, setRecomendations] = useState();
  let { id, media_type } = useParams(); 
  useEffect(()=>{
    const fetchPeople = async () => {
      try {
        if(media_type == "movie"){
        const data = await Movie.recomendations(id).json();
        data.results.splice(14)
        setRecomendations(data.results)
        } else if (media_type == "tv"){
          const data = await Tv.recomendations(id).json();
          data.results.splice(14)
          setRecomendations(data.results)

        }
      } catch (error) {
        // Handle API errors
        console.error(error);
      }
    };
    fetchPeople()
  }, [])
  
return (
    <Grid2 container>
        {recomendations && recomendations.map((item)=>{return(
            <SectionItems item={item} media_type={media_type}/>
        )}
        )}
  </Grid2>    
);
}

export default Platforms;

