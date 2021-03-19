import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Posts from './Posts'
import StoryReel from './StoryReel'
import db from '../firebase'

function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timeStamp', 'desc').onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({id :doc.id, data: doc.data() })))
        )
    }, [])

    return (
        <div className="Feed">
            <StoryReel />
            <MessageSender />

            {posts.map((post) => (
                <Posts
                    key={post.data.id}
                    profileSrc={post.data.profileSrc}
                    userName={post.data.userName}
                    timeStamp={post.data.timeStamp}
                    message={post.data.message}
                    Image={post.data.Image}
                />
            ))}
        </div>
    )
}

export default Feed
