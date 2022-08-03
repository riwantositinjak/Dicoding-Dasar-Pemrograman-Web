// menangkap element html melalui id
const image = document.getElementById("gambar");

const button = document.querySelectorAll(".button");
const playButton = button[3];
const playButtonElement = playButton.children[0];

// styling dari JavaScript
image.setAttribute("width", "200px;");
image.setAttribute("height", "200px");
playButtonElement.setAttribute("type", "submit");


