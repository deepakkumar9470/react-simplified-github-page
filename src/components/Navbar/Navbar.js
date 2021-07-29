import React from 'react'
import './Navbar.scss'
import NotificationsIcon from '@material-ui/icons/Notifications';
import GitHubIcon from '@material-ui/icons/GitHub';

const Navbar = () => {
   
    return (
        <div className="navbar">
            <div className="container">
             <div className="left">
                <GitHubIcon/>
             </div>

               <div className="right">
                   <NotificationsIcon className="icon"/>

                   <span className="iconspan"></span>
               </div>
            </div>

            
      </div>
    )
}

export default Navbar
