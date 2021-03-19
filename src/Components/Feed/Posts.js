import { Avatar } from '@material-ui/core'
import React from 'react'
import './Posts.css'
import { Comment, Share, ThumbUp } from '@material-ui/icons'

function Posts({profileSrc,userName,timeStamp,message,Image}) {
    return (
        <div className="posts">
            <div className="post_top">
                <Avatar src={profileSrc}/>
                <div className="post_info">
                    <h4>{userName}</h4>
                    <p>{new Date(timeStamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post_message">
                <p>{message}</p>
            </div>
            
            {Image && 
            <div className="post_image">
                <img src={Image} alt="post images"/>
            </div>}
            
            <div className="post_options">
                <div className="post_option">
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <Comment />
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <Share />
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Posts
