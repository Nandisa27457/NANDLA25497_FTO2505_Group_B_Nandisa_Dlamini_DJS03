import React, { useState, useEffect } from 'react';
import fetchPodcasts from '../utility';

const Podcasts = () => {
    const [podcasts, setPodcasts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(()=>{
        try {
            async function fetchData(){
            const data = await fetchPodcasts()
            setPodcasts(data)
            setIsLoading(false)
        }
        fetchData() 
            
        } catch (error) {
            console.log(error)
        }
          
    },[])
    
    if (isLoading) {
        return (
         <div className="loading">
         <div className="loading-text">Loading...</div>
        </div>
        );
    }
    return (
        <div> 
            {podcasts && podcasts.map ((podcast) =>
                <h2>{podcast.title}</h2>
            )}
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