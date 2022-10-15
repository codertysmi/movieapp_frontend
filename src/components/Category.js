
import Grid2  from "@mui/material/Unstable_Grid2";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { textAlign } from "@mui/system";
import { Link } from "react-router-dom";

function Category(props) {


  return (
    <Grid2 xs={6} lg={1.8}>
      {props.link ? 
      <Link to={props.link} style={{textDecoration: "none", color: "white"}}>
        <Paper elevation={props.theme.palette.mode === 'light' ? 1: 0} sx={props.theme.palette.mode === 'light' ? {boxShadow: "rgb(103 116 142 / 8%) 0rem 0rem 1rem 0rem", padding: "15px", width: "100%", minHeight: "94"} : {padding: "15px", width: "100%", minHeight: "94", textAlign: "center", backgroundColor: "rgba(27, 27, 27, 1)"}}>
        <Typography variant="h6" sx={{fontWeight: "550"}}>
            {props.icon}
            {props.category}
        </Typography>
        </Paper>
      </Link>
    :
    <a href={props.href} style={{textDecoration: "none", color: "white"}}>
      <Paper elevation={props.theme.palette.mode === 'light' ? 1: 0} sx={props.theme.palette.mode === 'light' ? {boxShadow: "rgb(103 116 142 / 8%) 0rem 0rem 1rem 0rem", padding: "15px", width: "100%", minHeight: "94"} : {padding: "15px", width: "100%", minHeight: "94", textAlign: "center", backgroundColor: "rgba(27, 27, 27, 1)"}}>
        <Typography variant="h6" sx={{fontWeight: "550"}}>
            {props.icon}
            {props.category}
        </Typography>
      </Paper>
    </a>
    
    }
    </Grid2>         
  );
}

export default Category;
