import './App.css';
import Search from './Search';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TopBar from './TopBar';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';



function App() {


  const [mode, setMode] = useState('light')
  const [font, setFont] = useState('')
  const [show, setShow] = useState(false)


  const showOptions = () => {
    setShow(!show)
  }

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


  const fontArray = ['serif', 'sans-serif', 'monospace']

  const handleClick = (fontId) => {
    const selectedFont = fontArray.filter((f) => f === fontId)
    setFont(selectedFont)
    setShow(false)

  }


  const handleToggle = () => {
    setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light')

  }


  return (
    <div className={`${font}`} style={{ marginLeft: '30%' }}>
      <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
        <CssBaseline />
        <TopBar
          mode={mode}
          handleToggle={handleToggle}
          font={font}
          handleClick={handleClick}
          fontArray={fontArray}
          show={show}
          showOptions={showOptions}
        />
        <Search />
      </ThemeProvider>
    </div>

  );
}


export default App;
