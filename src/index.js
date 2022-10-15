import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Details from './components/Details.js';
import Credits from './components/Credits.js';
import ItemDetails from './components/ItemDetails.js';
import Platforms from './components/Platforms.js';
import Genre from './components/Genre.js';
import NotFound from './components/NotFound.js';
import Search from './components/Search.js';
import Alert from '@mui/material/Alert';

 const theme =  createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fb6340',
    },
    secondary: {
      main: '#4E5166',
    },
  },

  components: {
    MuiAppBar: {
      color: 'transparent',
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  shape: {
    borderRadius: 32,
  },

  overrides: {
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + $track': {
            opacity: 1,
            border: 'none',
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: '1px solid #bdbdbd',
        backgroundColor: '#fafafa',
        opacity: 1,
        transition:
          'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
    },
  },
  spacing: 8,
  shadows: [
    "none",
    "none",
    "none",
    "none",
    "none",
    ...Array(20).fill('none')
  ]

});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/genre/:media_type/:genre/" element={<Genre />}/>
          <Route path="/search/:query/" element={<Search />}/>
          <Route path="/:media_type/:id/" element={<Details />}>
            <Route path="" element={<Credits/>} />
            <Route path="platforms" element={<Platforms/>}  />
            <Route path="similar" element={<ItemDetails/>}  />
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Router>
      <div  style={{position: "absolute", width: "50%", bottom: "8%"}}>
      <Alert sx={{zIndex: 999, position: "fixed", width: "34%", left: "50%", marginLeft: "-250px"}} variant="filled" severity="warning">This is an active development version, nothing here isn't close to the final version.</Alert>
      </div>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
