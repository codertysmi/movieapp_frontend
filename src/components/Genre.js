import Box from "@mui/material/Box";
import Grid2  from "@mui/material/Unstable_Grid2";
import Typography from '@mui/material/Typography';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useState } from 'react';
import Movies from '../api/services/Movies.js';
import Tv from '../api/services/Tv.js';
import SectionItems from './SectionItems.js';
import Navbar from './Navbar.js';
import { Link, useParams } from "react-router-dom";

function Genre(props) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [items, setItems] = useState([])
  const [genres, setGenres] = useState([])
  const [genreTitle, setGenreTitle] = useState([])

  let { media_type, genre } = useParams(); 


  useEffect(()=>{
    const fetchPeople = async () => {
      try {
        if(media_type === "movie"){
        
            const response = await Movies.getMoviesByGenre(genre).json();
            setItems(response.results);
            if(genre){
                const api_genres = await Movies.genres().json();
                setGenres(api_genres.genres);
                for (let i = 0; i < api_genres.genres.length; i++) {
                    if(api_genres.genres[i].id == genre){
                        setGenreTitle(api_genres.genres[i].name);
                    }
                }
            }
        }
        else if(media_type === "tv"){
            const response = await Tv.getTvByGenre(genre).json();
            console.log(response)
            setItems(response.results);
        }

      } catch (error) {
        // Handle API errors
        console.error(error);
      }
    };
    fetchPeople()
  }, [])

  return (
    <Box sx={{display: "flex"}}>
      <CssBaseline/>
    <Navbar/>
    <Box component="main" m={8} sx={{flexGrow: 1, marginTop: "25px"}}>

        <Grid2 container spacing={2} rowSpacing={7} columnSpacing={3} sx={{marginTop: "50px"}}>
            <Grid2 item xs={12} lg={12}>
            <Typography variant="h4" sx={{fontWeight: "550"}}>
                {media_type === "movie" ? "Movies" : "Tv Shows"}
                {genreTitle ? " - " + genreTitle : ""}
            </Typography>
            </Grid2>
                {items.map((item, i) => (
                    <SectionItems key={i} item={item} media_type={media_type}/>
                ))}
        </Grid2>
        
    </Box>
    </Box>
  );
}

export default Genre;
