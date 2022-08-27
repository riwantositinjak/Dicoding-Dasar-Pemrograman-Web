const container = document.getElementById('container');
const heading = document.createElement('h1');
heading.innerHTML = "<i>halooooo</i>";
const h2 = document.createElement('h2');
h2.innerHTML = "<em> HALLO RIWANTO SITINJAK </em>";

const button = document.createElement('button');
button.innerText = "KLIK DISINI";

container.appendChild(heading);
container.appendChild(button);


container.style.margin = "150px auto"

button.addEventListener('click', () => {
    container.appendChild(h2);
})