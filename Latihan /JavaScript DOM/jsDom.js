// DOM Manipulation 

// sintaks membuat sebuah elemen baru 
const pNew = document.createElement('p');
const insideP = document.createTextNode('Ini merupakan paragraf baru yang di tambahkan melalui JavaScript');

// sintaks untuk menyimpan tulisan ke dalam elemen baru
pNew.appendChild(insideP);

// sintaks untuk menyimpan pNew di akhir SectionA
const SectionA = document.getElementById('a');
SectionA.appendChild(pNew);


// menambahkan list item di section B 

const liNew = document.createElement('li');
const liTeks = document.createTextNode('Item yang ditambahkan melalui JavaScript');
liNew.appendChild(liTeks);

// menyeleksi elemen yang ingin dimasukkan item baru 
const ul = document.querySelector('section#b ul');
const item = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liNew, item)

// removeChild() 
// sebelum menghapus sebuah elemen kita harus menyeleksi elemen parentnya terlebih dahulu
// kemudian kita seleksi elemen yang ingin kita hapus 

// menyeleksi elemen parent dari elemen child yang ingin kita hapus
const sectionA = document.getElementById('a');
const tagLink = document.querySelector('section#a a');

sectionA.removeChild(tagLink);

// Styling elemen yang sudah di manipulasi dengan Dom 
pNew.style.backgroundColor ='lightblue';
liNew.style.backgroundColor='lightblue';



// Sekarang kita akan membuat parentNode.replaceChild();

// sekarang kita akan menyeleksi elemen parentnya 
const sectionB = document.getElementById('b');

// menyeleksi elemen yang ingin direplace 
const pFour = sectionB.querySelector('p');

// membuat elemen yang ingin mereplace elemen 

const newElement = document.createElement('h1');
const newTeks = document.createTextNode('JavaScript New Title');

// memasukkan newTeks ke dalam elemen baru 
newElement.appendChild(newTeks);

// memasukkan elemen baru ke dalam sebuah elemen p yang lama 
sectionB.replaceChild(newElement, pFour);


