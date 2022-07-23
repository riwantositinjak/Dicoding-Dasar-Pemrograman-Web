// styling center text align 
const body = document.body;
body.style.textAlign = 'center';


// membuat elemen div
const div = document.createElement('div');
body.appendChild(div);


const h1 = document.createElement('h1');
const teksH1 = document.createTextNode('Bermain dengan Warna');
h1.appendChild(teksH1);
div.appendChild(h1);


// membuat elemen button 
const button = document.createElement('button');
const buttonText = document.createTextNode('Tombol Ubah Warna')


div.appendChild(button);

// styling button 
button.appendChild(buttonText);
button.style.padding='10px';
button.style.backgroundColor='white'
button.style.borderRadius = '8px';
button.style.margin = '10px 0 0 0';


// mendengarkan event ketika di click di button 
button.addEventListener('click', () => {
    body.setAttribute('class', 'biru-muda');
});