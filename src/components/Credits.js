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


const Credits = ({ children }) => {

  const theme = useTheme();
  const [credits, setCredits] = useState([])
  let { id, media_type } = useParams(); 
  const location = useLocation()

  useEffect(()=>{
    const fetchPeople = async () => {
      try {
        if(media_type == "movie"){
            const credits = await Movie.credits(id).json();
            credits.cast.splice(16)
            setCredits(credits.cast)
            } else if (media_type == "tv"){
              const credits = await Tv.credits(id).json();
              credits.cast.splice(16)
              setCredits(credits.cast)
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
    {credits.map((credit)=>{return(
        <Grid2 item xs={12} sm={6} md={4} lg={1.8} xl={1.5}>
          <Credit key={credit.id} title={credit.character} name={credit.name} poster_path={credit.profile_path} id={credit.id}/>
        </Grid2>
      )})}
    </Grid2>
  );
}

export default Credits;
