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
                <div>
                <img src={podcast.image} alt="logo" width="60px" />
                <h3>{podcast.title}</h3>
                <p>{podcast.genre}</p>
                <p>Seasons:{podcast.seasons}</p>
                <p>Updated date:{podcast.date}</p>
            </div> 
            )}
             
        </div>
    );
}

export default Podcasts;