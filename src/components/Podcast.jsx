import React, { Component } from 'react';
import { getGenres } from '../utility';
import { formatDate } from '../dateutility';


const Podcast = (podcast) => {
    return (
        <div className="podcast-card">
            <img src={podcast.image} alt="logo" width="60px" />
            <h3>{podcast.title}</h3>
            <p>{getGenres(podcast.genres)}</p>
            <p>{podcast.seasons} seasons</p>
            <p>Updated date: {formatDate(podcast.updated)}</p>
        </div> 
    );
}


export default Podcast;