import Box from "@mui/material/Box";
import Grid2  from "@mui/material/Unstable_Grid2";
import Typography from '@mui/material/Typography';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useState } from 'react';
import Movies from '../api/services/Movies.js';
import Section from '../api/services/Section.js';
import SectionItems from './SectionItems.js';
import Navbar from './Navbar.js';
import { Link, useParams } from "react-router-dom";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

function Search(props) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [items, setItems] = useState([])


  let { query } = useParams(); 

  useEffect(()=>{
    const fetchPeople = async () => {
      try {
        const response = await Section.search(query).json();
        console.log(response.results)
        setItems(response.results);

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
            <div style={{border: "1px solid #4E5166", borderRadius: "30px",  height: "50px", display: "flex", gap: "10px", alignItems: "center", padding: "10px"}}>
            <SearchIcon/>
            <InputBase sx={{width: "100%"}} placeholder="Search"></InputBase>
            </div>
            </Grid2>
                {items.map((item, i) => (
                    <>
                    {item.media_type == "movie" | "tv" ?
                    <SectionItems key={i} item={item} media_type={item.media_type}/>
                    :
                    null
                    }
                    </>
                ))}
        </Grid2>
        
    </Box>
    </Box>
  );
}

export default Search;
