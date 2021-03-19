import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, VideoCall } from '@material-ui/icons'
import React, { useState } from 'react'
import './MessageSender.css'
import { useStateValue } from '../Redux/StateProvider'
import db from '../firebase'
import firebase from 'firebase'

function MessageSender() {
    const [{user}, dispatch] = useStateValue()

    const [input, setInput] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()

        db.collection('posts').add({
            message: input,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            profileSrc: user.photoURL,
            userName: user.displayName,
            Image: imgUrl,
        })

        setInput('')
        setImgUrl('')
    }

    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                        type="text" 
                        placeholder={`What's on your mind ${user.displayName}?`} 
                        value={input} 
                        onChange={e => setInput(e.target.value)}/>
                    <input 
                        type="text" 
                        placeholder="Image Link" 
                        value={imgUrl} onChange={e => setImgUrl(e.target.value)}/>
                    <button 
                        type="submit" 
                        onClick={handleSubmit}
                    >
                    </button>
                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="msg_option">
                    <VideoCall style={{color:"red"}}/>
                    <h4>Live Video</h4>
                </div>
                <div className="msg_option">
                    <PhotoLibrary style={{color:"green"}}/>
                    <h4>Photo/Video</h4>
                </div>
                <div className="msg_option">
                    <InsertEmoticon style={{color:"#dada00"}}/>
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
