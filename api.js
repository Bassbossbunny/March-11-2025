//document.getElementById('CatFact')
CatFact.textContent = "Loading...";

fetch("https://catfact.ninja/fact")
.then(Response => Response.json())
.then(data =>{
    console.log(data);
    console.log(data.fact);
})