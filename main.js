async function searchMovie(){
    const nameMovie = document.getElementById("input").value
    const response = await fetch('http://www.omdbapi.com/?apikey=aa4591de&t='+nameMovie , {
        method : "get",
    });

    var data = await response.json();

    const tittle = document.getElementById("tittle")
    tittle.innerHTML = data['Title']
}