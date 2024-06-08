import './App.css';
import Search from './Search';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TopBar from './TopBar';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';


function App() {


  const [mode, setMode] = useState('light')


  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const handleToggle = () => {
    setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light')

  }


  return (
    <div>
      <ThemeProvider theme={mode === 'light' ? darkTheme : lightTheme}>
        <CssBaseline />
        <TopBar mode={mode} handleToggle={handleToggle} />
        <Search />
      </ThemeProvider>
    </div>
  );
}


export default App;
