async function searchMovie(){
    const nameMovie = document.getElementById("input").value
    const response = await fetch('http://www.omdbapi.com/?apikey=aa4591de&t='+nameMovie , {
        method : "get",
    });

    const tittle = document.getElementById("tittle").value
    tittle.innerHTML = response['Title']
}