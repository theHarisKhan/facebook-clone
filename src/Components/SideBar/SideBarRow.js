import { Avatar } from '@material-ui/core'
import React from 'react'

function SideBarRow({src,Icon,title}) {
    return (
        <div className="Sidebar_option">
            {src && <Avatar src={src}/>}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SideBarRow
