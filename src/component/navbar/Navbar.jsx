import React from 'react';
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { useContext } from 'react';
import { DarkMOdeContext } from '../../context/darkModeContext';
const Navbar = () => {
    const {dispatch} = useContext(DarkMOdeContext)
    return(

        <div className='navebar'>
            <hr/>
            <div className='wrapper'>
                <div className='search'>
                    <input type='text' placeholder='Search...' />
                    <SearchOutlinedIcon className='icon'/>
                </div>
                <div className='items'>
                    <div className='item'>
                        <LanguageOutlinedIcon className='icon'/>
                        English
                    </div>
                    <div className='item'>
                        <FullscreenOutlinedIcon className='icon'/>
                    </div>
                    <div onClick={()=>dispatch({type:'TOGGLE'})} className='item'>
                        <DarkModeOutlinedIcon className='icon'/>
                    </div>
                    <div className='item'>
                        <NotificationsOutlinedIcon className='icon'/>
                        <div className='counter'>1</div>
                    </div>
                    <div className='item'>
                        <ChatBubbleOutlineOutlinedIcon className='icon'/>
                        <div className='counter'>2</div>
                    </div>
                    <div className='item'>
                        <ListOutlinedIcon className='icon'/>
                    </div>
                    <div className='item'>
                        <img src='https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress' alt='' className='avatar'/>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Navbar;