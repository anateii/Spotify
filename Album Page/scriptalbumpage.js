function changeSong() {
  let newImg = (document.getElementById("image-footer").src =
    "../images/Album covers/bohemian-rapsody.png");
  let newTitle = (document.getElementById("title-footer").innerHTML =
    "Bohemian Rhapsody");
}

function changeSong1() {
  let newImg = (document.getElementById("image-footer").src =
    "../images/Album covers/bohemian-rapsody.png");
  let newTitle = (document.getElementById("title-footer").innerHTML =
    "20th Century Fox Fanfare");
}

function changeSong2() {
  let newImg = (document.getElementById("image-footer").src =
    "../images/Album covers/bohemian-rapsody.png");
  let newTitle = (document.getElementById("title-footer").innerHTML =
    "Somebody to love");
}

function changeSong3() {
  let newImg = (document.getElementById("image-footer").src =
    "../images/Album covers/bohemian-rapsody.png");
  let newTitle = (document.getElementById("title-footer").innerHTML =
    "Doing all right- Revisited");
}

function changeSong4() {
  let newImg = (document.getElementById("image-footer").src =
    "../images/Album covers/bohemian-rapsody.png");
  let newTitle = (document.getElementById("title-footer").innerHTML =
    "Keep yourself Alive - Live at Rainbow");
}
function changeSong5() {
  let newImg = (document.getElementById("image-footer").src =
    "../images/Album covers/bohemian-rapsody.png");
  let newTitle = (document.getElementById("title-footer").innerHTML =
    "Killer Queen");
}
function changeSong6() {
  let newImg = (document.getElementById("image-footer").src =
    "../images/Album covers/bohemian-rapsody.png");
  let newTitle = (document.getElementById("title-footer").innerHTML =
    "Fat Bottomed Girl-Live in Paris");
}
function changeSong7() {
  let newImg = (document.getElementById("image-footer").src =
    "../images/Album covers/bohemian-rapsody.png");
  let newTitle = (document.getElementById("title-footer").innerHTML =
    "Now I'm here- Live at Hammersmith Odeon");
}
function changeSong8() {
  let newImg = (document.getElementById("image-footer").src =
    "../images/Album covers/bohemian-rapsody.png");
  let newTitle = (document.getElementById("title-footer").innerHTML =
    "Crazy Little Thing Called Love");
}

const albumCoverElement = document.querySelector("img[alt='Album']");
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
  albumCoverElement.src = data.cover_medium;
  albumTitleElement.innerText = data.title;

  console.log(data.tracks.data);

  tracklistElement.innerHTML = data.tracks.data
    .map(
      (track) => `
        <div class="py-3 trackHover">
          <a
            href="#"
            class="card-title trackHover px-3"
            style="color: white"
            >${track.title}</a
          >
          <small class="duration pr-3" style="color: white">
            ${secondsToTimestamp(track.duration)}
          </small>
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
