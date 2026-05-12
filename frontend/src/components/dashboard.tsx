
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Search, Plus, SquareArrowRight, House, HousePlus } from 'lucide-react';
import RoomList from './room-list';
import "../styles/dashboard.css";
import "../styles/global.css";

export default function Dashboard() {
    const [text, setText] = useState('');
    const [choice, setChoice] = useState('joined-rooms');
    /* const navigate = useNavigate(); for buttons to link url in lieu of <Link /> */

    const handleText = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setText(event.target.value);
    };

    const buttonPress = (mode : string) => {
        if (mode === 'joined-rooms' ) {
            setChoice('joined-rooms')
        }
        else if (mode === 'available-rooms') {
            setChoice('available-rooms')
        }
    }

    return (
        <>
            <div id="dashboard-navbar">
                <div id="navbar-search-field">
                    <div id="navbar-search-box">
                        <Search id="navbar-search-icon" />
                        <input 
                            id="navbar-search" 
                            type="text" 
                            value={text} 
                            onChange={handleText}
                            placeholder="Search Room"
                        />
                    </div> 
                </div>
                <div id="navbar-buttons-field">
                    <button className={`navbar-button` + `${choice === 'joined-rooms' ? '-active': ''}`}
                        id="joined-rooms-btn"
                        onClick={() => buttonPress('joined-rooms')}>
                        <div> <House/> </div>
                        <div> Joined Rooms </div>
                    </button>
                    <button className={`navbar-button` + `${choice === 'available-rooms' ? '-active' : ''}`}  
                            id="available-rooms-btn"
                            onClick={() => buttonPress('available-rooms')}>
                        <div> <HousePlus/> </div>
                        <div> Available Rooms </div>
                    </button>
                    <button className='navbar-button' 
                            id="create-room-btn">
                        <div> <Plus/> </div> 
                        <div> Create Room </div>
                    </button>
                    <button className='navbar-button' 
                            id="join-room-btn">
                        <div> <SquareArrowRight /> </div>
                        <div> Join Room </div>
                    </button>
                </div>
            </div>
            <div id="dashboard-body">
                <RoomList mode={choice}/>
            </div>
        </>
    )
}