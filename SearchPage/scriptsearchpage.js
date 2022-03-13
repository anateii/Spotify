const row = document.querySelector('#secondWrapper')
const searchQuery = document.querySelector("#searchField")

window.onload = () => {
  fetchArtist()
};



function fetchArtist() {


  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery.value || "queen"}`)
   
  .then(r => r.json())


    .then(displayResults)
}



 
function displayResults(results) {


  row.innerHTML = results.data.map(({ album, artist }) => `
  
    <div class="col text-center text-dark" >
      <a href="/Album Page/albumpage.html?id=${album.id}">
        <img class="img-fluid" src="${album.cover_big}" alt="img placeholder" />  
      </a>
      <p>
        <a href="/Album Page/albumpage.html?id=${album.id}">${album.title}</a>
        <br />
        <a href="/Artist Page/artistpage.html?id=${artist.id}">${artist.name}</a>
      </p>
    </div>
    
  `).join('')

}

