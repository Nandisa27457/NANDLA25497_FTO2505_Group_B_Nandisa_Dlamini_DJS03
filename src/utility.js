export default async function fetchPodcasts() {
    const response = await fetch("https://podcast-api.netlify.app/")
    if(!response.ok) {
        console.log("There was an error")
    }
    return response.json()
}

