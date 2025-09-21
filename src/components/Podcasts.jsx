import React, { useState, useEffect } from 'react';
import Podcast from './Podcast';
import {fetchPodcasts} from '../utility';

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
        <div className="podcast-grid"> 
            {podcasts && podcasts.map ((podcast) =>
                <Podcast key={podcast.id} {...podcast} />
            )}
        </div>
    );
}

export default Podcasts;