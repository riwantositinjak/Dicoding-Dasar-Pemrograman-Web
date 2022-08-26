const bukuSudahDibaca = "completeBookshelfList";
const bukuBelumDibaca = "incompleteBookshelfList";
const itemBooks = "itemBook";

const formBook = (judulBuku, penulisBuku, tahunTerbit, selesaiDibaca) => {
  const divBook = document.createElement("div");
  divBook.classList.add("section-book");

  const judulBukuTag = document.createElement("h2");
  judulBukuTag.innerText = judulBuku;

  const penulisBukuTag = document.createElement("p");
  penulisBukuTag.classList.add("penulis");
  penulisBukuTag.innerText = penulisBuku;

  const tahunTerbitTag = document.createElement("p");
  tahunTerbitTag.classList.add("tahun");
  tahunTerbitTag.innerText = tahunTerbit;

  const containerButton = document.createElement("div");
  containerButton.classList.add("buttonContainer");

  if (selesaiDibaca) {
    containerButton.append(showTombolUlang(), showTombolHapus());
  } else {
    containerButton.append(showTombolCek(), showTombolHapus());
  }

  const containerBook = document.createElement("div");
  containerBook.classList.add("insideContainer");
  containerBook.append(divBook, containerButton);

  return containerBook;
};

const showTombolUlang = () => {
  return showTombolUlang("tombolUlang", (e) => {
    ulangMasukkanBuku(e.target.parentElement.parentElement);
  });
};

const showTombolHapus = () => {
  return showTombolHapus("tombolHapus", (e) => {
    hapusBuku(e.target.parentElement.parentElement);
  });
};

const showTombolCek = () => {
  return showTombolCek("tombolCek", (e) => {
    tambahKeBukuSudahDibaca(e.target.parentElement.parentElement);
  });
};

const makeButton = (typeButton, eventListener) => {
  const tombol = document.createElement("button");
  tombol.classList.add(typeButton);
  tombol.addEventListener("click", (e) => {
    eventListener(e);
  });
  return tombol;
};

// function tambah buku

const masukkanBuku = () => {
  const incompleteBookshelfList = document.getElementById(bukuBelumDibaca);
  const judul = document.getElementById("inputJudulBuku").value;
  const penulis = `Penulis : ${document.getElementById("inputPenulis").value}`;
  const tahun = `Tahun : ${document.getElementById("inputTahunBuku").value}`;

  const masukkanBukuTag = masukkanBuku(judul, penulis, tahun, false);
  const objectBuku = listObjectBuku(judul, penulis, tahun, false);

  masukkanBukuTag[itemBooks] = objectBuku.id;
  buku.push(objectBuku);
  incompleteBookshelfList.append(masukkanBukuTag);
  resetInputForm();
  storageUpdateData();
};

const resetInputForm = () => {
  document.getElementById("judul").value = "";
  document.getElementById("penulis").value = "";
  document.getElementById("tahun").value = "";
};

const tambahKeBukuSudahDibaca = (tagDOM) => {
  const daftarBukuTerbaca = document.getElementById(bukuSudahDibaca);
  const judulBuku = tagDOM.querySelector(".sectionBook h2").innerText;
  const penulisBuku = tagDOM.querySelector(".sectionBook .penulis").innerText;
  const tahunTerbit = tagDOM.querySelector("sectionBook .tahun").innerText;

  const bukuBaru = masukkanBuku(judul, penulis, tahun, true);

  const book = cariBuku(tagDOM[itemBooks]);
  book.selesaiDibaca = true;
  bukuBaru[itemBooks] = book.id;

  daftarBukuTerbaca.append(bukuBaru);
  tagDOM.remove();

  storageUpdateData();
};

const ulangMasukkanBuku = (tagDOM) => {
  const daftarBukuBelumTerbaca = document.getElementById(bukuBelumDibaca);
  const judulBuku = tagDOM.querySelector(".sectionBook h2").innerText;
  const penulisBuku = tagDOM.querySelector(".sectionBook .penulis").innerText;
  const tahunTerbit = tagDOM.querySelector("sectionBook .tahun").innerText;

  const bukuBaru = masukkanBuku(judul, penulis, tahun, false);
  const book = cariBuku(tagDOM[itemBooks]);
  book.selesaiDibaca = false;
  bukuBaru[itemBooks] = book.id;

  daftarBukuBelumTerbaca.append(bukuBaru);
  tagDOM.remove();

  storageUpdateData();
};

const perbaruiDataBuku = () => {
  const daftarBukuBelumTerbaca = document.getElementById(bukuBelumDibaca);
  const daftarBukuTerbaca = document.getElementById(bukuSudahDibaca);

  for (book of buku) {
    const bukuBaru = masukkanBuku(
      book.judulBuku,
      book.penulisBuku,
      book.tahunTerbit,
      book.selesaiDibaca
    );
    bukuBaru[itemBooks] = book.id;

    if (book.selesaiDibaca) {
      daftarBukuTerbaca.append(bukuBaru);
    } else {
      daftarBukuBelumTerbaca.append(bukuBaru);
    }
  }
};
