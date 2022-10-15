import './App.css';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Grid2  from "@mui/material/Unstable_Grid2";
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Carousel from 'react-material-ui-carousel'
import CssBaseline from '@mui/material/CssBaseline';
import InputBase from '@mui/material/InputBase';
import { useEffect, useState } from 'react';
import Section from './api/services/Section.js';
import Movies from './api/services/Movies.js';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import SearchIcon from '@mui/icons-material/Search';
import SectionItems from './components/SectionItems.js';
import Navbar from './components/Navbar.js';
import Category from './components/Category.js';
import { Link } from "react-router-dom";

function App() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [trending, setTrending] = useState([])
  const [trendingWeek, setTrendingWeek] = useState([])
  const [genres, setGenres] = useState([])
  const [action, setAction] = useState([])
  const [horror, setHorror] = useState([])
  const [scienceFiction, setScienceFiction] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
    const fetchPeople = async () => {
      try {
        const data = await Section.trending().json();
        data.results.splice(14)
        setTrending(data.results)
        const dataWeek = await Section.trendingWeek().json();
        dataWeek.results.splice(6)

        setTrendingWeek(dataWeek.results)
        const genres = await Movies.genres().json();
        
        const action = await Section.action().json()
        action.results.splice(14)
        setAction(action.results)
        const horror = await Section.horror().json()
        horror.results.splice(14)
        setHorror(horror.results)
        const scienceFiction = await Section.scienceFiction().json()
        scienceFiction.results.splice(14)
        setScienceFiction(scienceFiction.results)
      } catch (error) {
        // Handle API errors
        console.error(error);
      }
    };
    fetchPeople()
  }, [])


  function handleSearch(e){
    setSearch(e.target.value)
  }

  return (
    <Box sx={{display: "flex"}}>
      <CssBaseline/>
    <Navbar/>
    <Box component="main" m={8} sx={{flexGrow: 1, marginTop: "25px"}}>

      <Grid2 container spacing={2} rowSpacing={7} columnSpacing={3} >
        <Grid2 xs={12} sx={{display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "25px"}}>
          <Typography  variant="h1" sx={{fontWeight: "800", fontSize: "50px"}}>
            My cinema
          </Typography>
          <div style={{border: "1px solid #4E5166", borderRadius: "30px",  height: "50px", display: "flex", gap: "10px", alignItems: "center", padding: "10px"}}>
            <SearchIcon/>
            <InputBase onSubmit={()=>console.log()} placeholder="Search"></InputBase>
          </div>
        </Grid2>


        <Category icon={""} href="#trending" category="Trending" theme={theme}/>
        <Category link={"genre/movie/28"} icon={""} category="Action" theme={theme}/>              
        <Category link={"genre/movie/35"} icon={""} category="Comedy" theme={theme}/>              
        <Category link={"genre/movie/27"} icon={""} category="Horror" theme={theme}/>              
        <Category link={"genre/movie/10749"} icon={""} category="Romance" theme={theme}/>              
        <Category link={"genre/movie/878"} icon={""} category="Science Fiction" theme={theme}/>              
              
        <Grid2 item xs={12}>
          <Carousel fullHeightHover={true} autoPlay={false}  animation="slide">
            {trendingWeek.map((item)=>
            <div style={{ width: "100%", height: "600px", position: "relative"}}>
              <div style={theme.palette.mode === 'light' ? {width: "100%", height: "100%", position:"absolute", boxShadow: "rgb(103 116 142 / 8%) 0rem 0rem 1rem 0rem", borderRadius: 32, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`} : 
              {width: "100%", height: "100%", position:"absolute", borderRadius: 32, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`}}>
                <div style={theme.palette.mode === 'light' ? {backdropFilter: "blur(20px)", backgroundColor: "rgba(237, 234, 222, .2)", marginTop: "400px", height: "200px", width: "100%", borderRadius: 32, position: "relative"} : {backdropFilter: "blur(20px)", backgroundColor: "rgba(18, 18, 18, .4)", marginTop: "400px", height: "200px", width: "100%", borderRadius: 32, position: "relative"}}>
                  <div style={{padding: "25px"}}>
                    <Typography variant="h2"  style={{color: "white", fontWeight: "700", fontSize: "38px"}}>{item.title}{item.name}</Typography>
                    <Typography variant="subtitle1" noWrap style={{color: "white",  fontSize: "17px"}}>{item.overview}</Typography>
                  </div>
                  <div>
                    <div style={{paddingLeft: "25px", display: "flex", flexDirection: "row"}}>
                      <Link to={`${item.media_type}/${item.id}`} style={{textDecoration: "none"}}>
                        <Button startIcon={<PlayCircleRoundedIcon/>} variant="contained" style={{color: "white", fontWeight: "700", fontSize: "17px", padding: "10px 20px"}}>Watch now</Button>
                      </Link>
                      <div style={isMobile? {display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "auto", paddingRight: "25px"} : {display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "auto", paddingRight: "25px"}}>
                        <StarIcon color="primary" sx={{marginLeft: "15px", width: "20px"}}/>
                        <Typography variant="h3" style={{marginLeft: "2px", fontWeight: "400", fontSize: "17px", opacity: "0.7"}}>{item.vote_average ? <div>{item.vote_average.toFixed(2)}</div> : <>Na</>}</Typography>
                        <Typography   variant="h3" style={{marginLeft: "15px", fontWeight: "400", fontSize: "17px", opacity: "0.7"}}>{item.release_date ? <div>{item.release_date.substring(0, 4)}</div> : <></>}{item.first_air_date ? <div>{item.first_air_date.substring(0, 4)}</div> : <></>}</Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )}
          </Carousel>

        </Grid2>
        <Grid2 xs={12}  sx={{display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "25px"}}>
          <Typography  variant="h2" sx={{fontWeight: "750", fontSize: "40px"}}>
            Trending
          </Typography>
          <div id="trending">
            <Button color={theme.palette.mode === 'light' ? "secondary" : "primary"} sx={{opacity: 0.5, textTransform: "initial", fontSize: "16px"}} variant="defaut">See all &gt;</Button>
          </div>
        </Grid2>
        <Grid2 container xs={12} md={12} lg={12} spacing={4}>
        {trending.map((item)=>
          <SectionItems item={item} />
        )}
        </Grid2>
        <Grid2 xs={12} sx={{display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "25px"}}>
          <Typography  variant="h2" sx={{fontWeight: "750", fontSize: "40px"}}>
            Action
          </Typography>
          <div>
            <Button color={theme.palette.mode === 'light' ? "secondary" : "primary"} sx={{opacity: 0.5, textTransform: "initial", fontSize: "16px"}} variant="defaut">See all &gt;</Button>
          </div>
        </Grid2>
        <Grid2 container xs={12} md={12} lg={12} spacing={4}>
        {action.map((item)=>
          <SectionItems item={item} />
        )}
        </Grid2>
        <Grid2 xs={12} sx={{display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "25px"}}>
          <Typography  variant="h2" sx={{fontWeight: "750", fontSize: "40px"}}>
            Horror
          </Typography>
          <div>
            <Button color={theme.palette.mode === 'light' ? "secondary" : "primary"} sx={{opacity: 0.5, textTransform: "initial", fontSize: "16px"}} variant="defaut">See all &gt;</Button>
          </div>
        </Grid2>
        <Grid2 container xs={12} md={12} lg={12} spacing={4}>
        {horror.map((item)=>
          <SectionItems item={item} />
        )}
        </Grid2>
        <Grid2 xs={12} sx={{display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "25px"}}>
          <Typography  variant="h2" sx={{fontWeight: "750", fontSize: "40px"}}>
            Science Fiction
          </Typography>
          <div>
            <Button color={theme.palette.mode === 'light' ? "secondary" : "primary"} sx={{opacity: 0.5, textTransform: "initial", fontSize: "16px"}} variant="defaut">See all &gt;</Button>
          </div>
        </Grid2>
        <Grid2 container xs={12} md={12} lg={12} spacing={4}>
        {scienceFiction.map((item)=>
          <SectionItems item={item} />
        )}
        </Grid2>

        </Grid2>
        
    </Box>
    </Box>
  );
}

export default App;
