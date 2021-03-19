import { LocalHospital, Pages, People,SupervisedUserCircle } from '@material-ui/icons'
import React from 'react'
import './SideBar.css'
import SideBarRow from './SideBarRow'
import { useStateValue } from '../Redux/StateProvider'

function SideBar() {
    const [{user}, dispatch] = useStateValue()
    
    return (
        <div className="Sidebar">
            <SideBarRow 
                src= {user.photoURL}
                title={user.displayName}
            />
            <SideBarRow 
                Icon={LocalHospital} 
                title="Covid-19 Informative Center"
            />
            <SideBarRow 
                Icon={People} 
                title="Friends"
            />
            <SideBarRow 
                Icon={Pages} 
                title="Pages"
            />
            <SideBarRow 
                Icon={SupervisedUserCircle} 
                title="Groups"
            />
        </div>
    )
}

export default SideBar
