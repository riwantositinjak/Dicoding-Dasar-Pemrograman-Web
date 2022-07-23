// Penggunaan addEventListener 
const sectionB = document.querySelector('section#b p');

sectionB.addEventListener('click', function(){

    // buat element yang ingin di tambahkan ketika event click
    const itemNew = document.createElement('li');
    const teksLi = document.createTextNode('NEW ITEM BARU DATANG BOS ');
    // memasukkan teks ke dalam sebuah element 
    itemNew.appendChild(teksLi);

    // seleksi elemen yang ingin ditambahkan list baru ketika terjadi event click
    const ul = document.querySelector('section#b ul');
    ul.appendChild(itemNew);
});


// Event handler menimpa event handler elemen sebelumnya

const p3 = document.querySelector('.p3');
p3.onclick = function() {
    p3.style.backgroundColor = 'red';
}

p3.onclick = function(){
    p3.style.color = 'yellow';
}

// sekarang kita gunakan addEventListener 

// p3.addEventListener('click', function(){
//     p3.style.backgroundColor = 'red'; 
// })

// p3.addEventListener('click', function(){
//     p3.style.color = 'yellow';
// })


