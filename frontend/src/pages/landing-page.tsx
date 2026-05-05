
import "../styles/landing.css";
import "../styles/global.css";

import { Outlet } from "react-router";
import { Gauge, Archive, CircleUser } from 'lucide-react';
import Logo from '../assets/logo.ico';
import A_user from '../assets/anonymous-user.png';

export default function LandingPage() {
    return(
        <div id="landing-page-container">
            <div id="landing-navbar">
                <div className='landing-navbar-cell'>
                    <img id='landing-navbar-logo' src={Logo} alt='AcadForum Logo'/>
                </div>
                <div className='landing-navbar-cell'>
                    <div className='white-circle-frame'>
                        <img id='landing-navbar-profile' src={A_user} alt='anonymous user' />
                    </div>
                    <span> Profile </span>
                </div>
                <div className='landing-navbar-cell'>
                    <div>
                        <div> <Gauge size={32}/> </div>
                        <span> Dashboard </span>
                    </div>

                </div>
                <div className='landing-navbar-cell'/>
                <div className='landing-navbar-cell'/>
                <div className='landing-navbar-cell'>
                    <div> <Archive size={32}/> </div>
                    <span> Archived Rooms </span>
                </div>
                <div className='landing-navbar-cell'>
                    <div> <CircleUser size={32}/> </div>
                    <span> About Creator </span>
                </div>
            </div>
            <div id="landing-main-area">
                <Outlet />
            </div>
        </div>
    )
}