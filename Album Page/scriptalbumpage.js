function changeSong() {
  let newImg = (document.getElementById("image-footer").src =
    "../images/Album covers/bohemian-rapsody.png");
  let newTitle = (document.getElementById("title-footer").innerHTML =
    "Bohemian Rhapsody");
}







const albumCoverElement = document.querySelector("img[alt='Album']");
const artistCoverElement = document.querySelector("img[alt='artist']");
const albumTitleElement = document.querySelector(".album-title");
const albumArtistElement = document.querySelector(".artist-name");
const tracklistElement = document.querySelector("#tracklist");

window.onload = () => {
  const params = new URLSearchParams(window.location.search); // '?id=915785&somethine=123&stuff=abc'

  const id = params.get("id");
  console.log(id);

  fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + id)
    .then((r) => r.json())
    .then(displayAlbum);
};

function displayAlbum(data) {
  albumArtistElement.innerText = data.artist.name;
  artistCoverElement.src = data.artist.picture;
  albumCoverElement.src = data.cover_medium;
  albumTitleElement.innerText = data.title;

  console.log(data.tracks.data);

   tracklistElement.innerHTML = data.tracks.data
    .map(
      (track) => `
      <div class="col-12 mt-2 text-white" id="playlist-column">
      <div class="container d-flex justify-content-start">
        <span id="playlist-hash">#</span>
        <a href="" id="playlist-song">
          <span>${track.title}</span>
        </a>
      </div>
      <span id="playlist-time"> ${secondsToTimestamp(track.duration)}</span>
    </div>
  </div>
      `
    )
    .join("");
}

function secondsToTimestamp(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;

  return `${minutes < 10 ? "0" : ""}${minutes}:${
    remainingSeconds < 10 ? "0" : ""
  }${remainingSeconds}`;
} 
