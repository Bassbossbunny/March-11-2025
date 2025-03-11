//document.getElementById('CatFact')
CatFact.textContent = "Loading...";

fetch("https://catfact.ninja/fact")
.then(Response => Response.json())
.then(data =>{
    console.log(data);
    console.log(data.fact);
    CatFact.textContent = data.fact;
});

//get a random cat image or gif
fetch("https://cataas.com/cat?type=medium&json=true")
.then(Response => Response.json())
.then(data=> {
    console.log(data.url);
    catImage.src= data.url;
})