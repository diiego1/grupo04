function searchMovie(){
    const nameMovie = document.getElementById("input").value
    fetch('http://www.omdbapi.com/?apikey=aa4591de&t='+nameMovie , {
        method : "get",
    }).then(async (response)=>{
        var data = await response.json();
    })
    
}