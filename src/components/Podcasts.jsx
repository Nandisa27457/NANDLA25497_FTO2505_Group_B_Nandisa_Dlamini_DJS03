import React, { Component, useEffect } from 'react';

function Podcasts () {
    async function fetchPodcasts() {
        const response = await fetch("https://podcast-api.netlify.app/")
        if(!response.ok) {
            console.log("There was an error")
        }
        console.log(await response.json())
    }
    
    useEffect(()=>{
        fetchPodcasts()
    },[])
    
    return (
        <div>
            <div>
                <img src="logo.png" alt="logo" />
                <h3>Title</h3>
                <p>Genre</p>
                <p>Seasons</p>
                <p>Updated date</p>
            </div>  
        </div>
    );
}

export default Podcasts;