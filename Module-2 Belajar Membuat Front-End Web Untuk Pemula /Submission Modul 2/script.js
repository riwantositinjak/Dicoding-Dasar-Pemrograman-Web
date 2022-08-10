const div = document.createElement('div');
div.setAttribute('class', 'DOM');

document.body.appendChild(div);

const buttons = document.createElement('button');
buttons.innerText ="Klik Disini";

div.appendChild(buttons);

buttons.style.width = " 100px";
buttons.style.height = "200px";

