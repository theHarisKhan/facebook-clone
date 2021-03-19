import React from 'react'

function Widgets() {
    return (
        <div>
            <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Freactjsbydesignmycodes&tabs=timeline&width=310&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="310" 
                height="500" 
                style={{border:'none',overflow:'hidden'}} 
                scrolling="no" 
                frameborder="0" 
                allowfullscreen="false" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            >

            </iframe>
        </div>
    )
}

export default Widgets
