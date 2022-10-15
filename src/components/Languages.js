
import Grid2  from "@mui/material/Unstable_Grid2";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Category(props) {


  return (
    <Grid2 xs={6} lg={2}>
        <Paper sx={props.theme.palette.mode === 'light' ? {boxShadow: "rgb(103 116 142 / 8%) 0rem 0rem 1rem 0rem", padding: "15px", width: "100%", minHeight: "94"} : {padding: "15px", width: "100%", minHeight: "94"}}>
        <Typography variant="h6" sx={{fontWeight: "550"}}>
            {props.icon}
            {props.category}
        </Typography>
        </Paper>
    </Grid2>         
  );
}

export default Category;