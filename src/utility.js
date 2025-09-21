import { genres } from "../public/data";

async function fetchPodcasts() {
    const response = await fetch("https://podcast-api.netlify.app/")
    if(!response.ok) {
        console.log("There was an error")
    }
    return response.json()
}

function getGenres (genreIds){
        let genreTitles = []
        genreIds.forEach(id => {
            const genre = genres.find(genre => genre.id === id)
            if (genre) {
                genreTitles.push(genre.title)
            }
        });
        return genreTitles 
}

export { fetchPodcasts, getGenres }