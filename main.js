async function searchMovie(){
    const nameMovie = document.getElementById("input").value
    const response = await fetch('http://www.omdbapi.com/?apikey=aa4591de&t='+nameMovie , {
        method : "get",
    });

    var data = await response.json();

    const tittle = document.getElementById("tittle")
    const year = document.getElementById("year")
    const director = document.getElementById("director")

    tittle.innerHTML = data['Title']
    year.innerHTML = data['Year']
    director.innerHTML = data['Director']

}