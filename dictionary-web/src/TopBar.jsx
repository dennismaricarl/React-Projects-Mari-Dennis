import { ReactComponent as Logo } from './images/logo.svg'
import Switch from '@mui/material/Switch';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const TopBar = ({ mode, handleToggle, handleClick, fontArray, show, showOptions}) => {

   
    return (
        <div style={{ marginBottom: '20px', marginTop: '60px' }}>

            <Logo onClick={() => window.location.reload()} />
            <div style={{ display: 'inline-block', marginLeft: '46%' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <KeyboardArrowDownIcon className='arrow-down' onClick={showOptions} />
                    


                    {show && (
                        <div className='font-items'>
                            {fontArray.map((f, index) => (
                                <MenuItem key={index} onClick={() => handleClick(`${f}`)} >{f}</MenuItem>
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