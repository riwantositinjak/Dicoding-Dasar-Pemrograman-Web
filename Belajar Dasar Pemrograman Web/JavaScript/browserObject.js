const firstName = prompt('siapa nama depanmu?');
const lastName = prompt('siapa nama belakangmu?');
const language = prompt('bisa berbahasa apa ?');

const user = {
    nama: {
        namaDepan: firstName,
        namaBelakang: lastName
    },
    bahasa: language
};

if (user.bahasa === 'english') {
    alert("Nice to meet you " + user.nama.namaDepan + " " + user.nama.namaBelakang);
} else if (user.bahasa === 'france') {
    alert("Ravi de vous rencontrer " + user.nama.namaDepan + " " + user.nama.namaBelakang);
} else if (user.bahasa === 'japanese') {
    alert("Hajimemashite " + user.nama.namaDepan + " " + user.nama.namaBelakang);
}

// kode ini digunakan di console browser 