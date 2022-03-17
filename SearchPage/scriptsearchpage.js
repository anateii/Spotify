const row = document.querySelector('#secondWrapper')
const searchQuery = document.querySelector("#searchField")

window.onload = () => {
  fetchArtist()
};



function fetchArtist() {


  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery.value || "pixies"}`)
   
  .then(r => r.json())


    .then(displayResults)
}



 
function displayResults(results) {


  row.innerHTML = results.data.map(({ album, artist }) => `
  
    <div class="col-3 text-center text-white" >
      <a href="/Album Page/albumpage.html?id=${album.id}">
        <img class="img-fluid" src="${album.cover_big}" alt="img placeholder"/>  
      </a>
      <p>
        <a href="/Album Page/albumpage.html?id=${album.id}" class="text-white">${album.title}</a>
        <br />
        <a href="/Artist Page/artistpage.html?id=${artist.id}" class="text-white">${artist.name}</a>
      </p>
    </div>
    
  `).join('')

}

