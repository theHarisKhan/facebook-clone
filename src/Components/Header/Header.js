import { Avatar, IconButton } from '@material-ui/core'
import { Add, ExpandMore, Home, NotificationsNone, People, Search, SupervisedUserCircle } from '@material-ui/icons'
import React from 'react'
import './Header.css'
import fbLogo from './Facebook-logo.png'
import { useStateValue } from '../Redux/StateProvider'

function Header() {
    const [{user}, dispatch] = useStateValue()

    return (
        <div className="header">
            <div className="header_left">
                <img src={fbLogo} alt="facebook icon"/>
                <div className="header_input">
                    <Search />
                    <input type="text"  placeholder="Find Friends"/>
                </div>
            </div>
            <div className="header_middle">
                <div className="header_option active">
                    <Home />
                </div>
                <div className="header_option">
                    <People />
                </div>
                <div className="header_option">
                    <SupervisedUserCircle />
                </div>
            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <Add />
                </IconButton>
                <IconButton>
                    <NotificationsNone />
                </IconButton>
                <IconButton>
                    <ExpandMore />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
