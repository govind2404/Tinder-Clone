import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
function Header() {
    return (
        <div className='header'>
            
            <IconButton>
            <PersonIcon fontSize="large" className="header-icon"/>
            </IconButton>
            <img
               src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/338_Tinder_logo-1024.png"
               className="tinder-icon"
               alt="Tinder icon"
            />
            <IconButton>
            <ForumIcon fontSize="large" className="header-icon"/>
            </IconButton>
        </div>

    )
}

export default Header
