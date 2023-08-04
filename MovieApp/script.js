const apikey ="afdc9113b78e652fc7897f9a35ec5106"
let year = "2023"
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&page=1&sort_by=popularity.desc&page=1&year=${year}`
const content = document.getElementById("content")
const urlposter = `https://images.tmdb.org/t/p/w500/`
const dropdown = document.getElementById('year')
const Now = new Date().getFullYear();
const NextYear = new Date().getFullYear()+1
for (let i = 2023; i >= 1885; i--){
    const option = document.createElement('option')
    option.value = i
    option.innerHTML = i
    dropdown.appendChild(option)
} 
if(Now == NextYear){
    const option = document.createElement('option')
    option.value = NextYear
    option.innerHTML = NextYear
    dropdown.appendChild(option)
}
async function displayMovie(url) {
    const response = await fetch(url)
    const movie = await response.json()

    while(content.firstChild){
        content.removeChild(content.firstChild)
    }
    movie.results.forEach(data => {
        const movieEl=document.createElement("div")
        movieEl.classList.add("movie")
        const title = document.createElement('h2')
        const poster = document.createElement('img')
        title.innerHTML = `${data.title.substring(0,24)}`
        poster.src = `${urlposter}${data.poster_path}`
        movieEl.appendChild(title)
        movieEl.appendChild(poster)
        content.appendChild(movieEl)   
    });
}
dropdown.addEventListener('change',()=>{
    year = dropdown.value
    const updateurl = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&page=1&sort_by=popularity.desc&page=1&year=${year}`
    displayMovie(updateurl)
})
displayMovie(url)
