import { ReactComponent as Logo } from './images/logo.svg'
import Switch from '@mui/material/Switch';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const TopBar = ({ mode, handleToggle, handleClick, font, fontArray, show, showOptions }) => {


    return (
        <div style={{ marginBottom: '20px', marginTop: '60px' }}>

            <Logo onClick={() => window.location.reload()} />
            <div style={{ display: 'inline-block', marginLeft: '38%' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h5 style={{ minWidth: '90px', textAlign: 'right', }}>{font}</h5>
                    <KeyboardArrowDownIcon className='arrow-down' onClick={showOptions} />
                    <span className='line-divider'></span>




                    {show && (
                        <div className='font-items'
                            style={{
                                backgroundColor: mode === 'dark' ? 'black' : 'white',
                                boxShadow: mode === 'dark' ? '0 0 15px rgba(164, 69, 237, 0.75)' : 'none'
                            }}>


                            {fontArray.map((f, index) => (
                                <MenuItem className="fonts" key={index} onClick={() => handleClick(`${f}`)} >{f}</MenuItem>
                            ))}

                        </div>

                    )}


                    <Switch onChange={handleToggle} />

                    {mode === 'light' ? < DarkModeOutlinedIcon /> : <DarkModeOutlinedIcon style={{ color: '#c396e5' }} />}

                </div>
            </div>

            <br />
        </div>
    )
}


export default TopBar;