import { Avatar } from '@material-ui/core'
import React from 'react'
import './StoryReel.css'
import pic1 from './imgs/pic1.jpg'
import pic2 from './imgs/pic2.jpg'
import pic3 from './imgs/pic3.jpg'
import back1 from './imgs/back1.jpg'
import back2 from './imgs/back2.jpg'
import back3 from './imgs/back3.jpg'
import { Add } from '@material-ui/icons'

function StoryReel() {
    return (
        <div className="StoryReel">
            <div className="story story_main" style={{backgroundImage: `url(${pic2})`}}>
                <Add />
                <h4>Create a Story</h4>
            </div>
            <Story
                profile={pic1}
                background={back1}
                title="John Boris" 
            />
            <Story
                profile={pic2}
                background={back2}
                title="Rock Lend" 
            />
            <Story
                profile={pic3}
                background={back3}
                title="Sohn Jame" 
            />
        </div>
    )
}

function Story({profile,background,title}){
    return(
        <div className="story" style={{backgroundImage: `url(${background})`}}>
            <Avatar src={profile} className="story_profile" />
            <h4>{title}</h4>
        </div>
    )
}

export default StoryReel
