import { ReactComponent as Logo } from './images/logo.svg'
import { ReactComponent as ArrowDown } from './images/icon-arrow-down.svg'
import { ReactComponent as Moon } from './images/icon-moon.svg'
import Switch from '@mui/material/Switch';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';


const TopBar = ({mode, handleToggle}) => {


    return (
        <div style={{marginBottom:'20px', marginTop:'60px'}}>
   
            <Logo />
            <div style={{display:'inline-block', marginLeft:'50%'}}>
            <ArrowDown style={{marginRight:'20px'}}/>

       
            <Switch onChange={handleToggle} />
           
            {mode === 'light'? < WbSunnyOutlinedIcon/> : <Moon />}
   
            </div>
          
           

            <br />
     



        </div>
    )
}


export default TopBar;