const h1 = document.createElement('h1');
const teksH1 = document.createTextNode('Hello World');
h1.appendChild(teksH1);
document.body.appendChild(h1);
const div = document.createElement('div');

// styling margin pada body 
document.body.style.textAlign = 'center'; 


//menambahkan element style pada head
const styling = document.createElement('style');
document.head.append(styling);



// masukkan div ke body 
document.body.appendChild(div);



// isi table nya 
