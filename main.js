function searchMovie(){
    const nameMovie = document.getElementById("input").value
    fetch('http://www.omdbapi.com/?t='+nameMovie , {
        method : "get",
    }).then(async (response)=>{
        var data = await response.json();
    })
    
}