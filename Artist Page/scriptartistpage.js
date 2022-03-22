const artistImageMain= document.querySelector("img[alt='imageMain']");
const artistName = document.getElementById("artist-name")
const artistFollowers = document.getElementById("artist-followers")


window.onload = () => {
    const params = new URLSearchParams(window.location.search); // '?id=915785&somethine=123&stuff=abc'
  
    const id = params.get("id");
    console.log(id);
  
    fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + id)
      .then((r) => r.json())
      .then(displayArtist);
  };


  function displayArtist (data) {
artistImageMain.src = data.picture_xl;
artistName.innerHTML = data.name;
artistFollowers.innerHTML = data.nb_fan + " followers";
console.log(data)
  }