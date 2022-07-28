const button = document.getElementById('tombol');
const textColor = document.querySelector('article .social-media .text');

// button change background
button.addEventListener("click", () => {
    document.body.style.backgroundColor = "lightblue";
})

button.addEventListener("click", () => {
    document.body.style.color = "yellow";
})