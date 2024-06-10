import { ReactComponent as Logo } from './images/logo.svg'
import { ReactComponent as ArrowDown } from './images/icon-arrow-down.svg'
import Switch from '@mui/material/Switch';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';



const TopBar = ({ mode, handleToggle }) => {


    return (
        <div style={{ marginBottom: '20px', marginTop: '60px' }}>

            <Logo />
            <div style={{ display: 'inline-block', marginLeft: '50%' }}>
                <ArrowDown style={{ marginRight: '20px' }} />


                <Switch onChange={handleToggle} />

                {mode === 'light' ? < DarkModeOutlinedIcon /> : <DarkModeOutlinedIcon style={{ color: '#c396e5' }} />}

            </div>

            <br />
        </div>
    )
}


export default TopBar;