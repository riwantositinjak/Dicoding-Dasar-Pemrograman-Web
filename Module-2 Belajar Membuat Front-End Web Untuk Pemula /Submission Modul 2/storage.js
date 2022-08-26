const LOCAL_STORAGE_KEY = "BOOKSHELF_APPS";

let buku = [];

const checkStorage = () => {
  if (typeof Storage === undefined) {
    alert("Your Browsert Did Not Support of Local Storage");
    return false;
  }
  return true;
};

const simpanData = () => {
  const parsing = JSON.stringify(buku);
  localStorage.setItem(LOCAL_STORAGE_KEY, parsing);
  document.dispatchEvent(new Event("onDataSave"));
};

const getData = () => {
  const nomorSeriData = localStorage.getItem(LOCAL_STORAGE_KEY);
  let data = JSON.parse(nomorSeriData);

  if (data !== null) buku = data;
  document.dispatchEvent(new Event("onDataLoad"));
};

const storageUpdateData = () => {
  if (checkStorage()) simpanData();
};

const listObjectBuku = (judulBuku, penulisBuku, tahunTerbit, selesaiDibaca) => {
  return {
    id: +new Date(),
    judulBuku,
    penulisBuku,
    tahunTerbit,
    selesaiDibaca,
  };
}

const cariBuku = (bookId) => {
  for (books of buku) {
    if (books.id === bookId) return books;
  }
  return null;
};

const cariIndexBuku = (bookId) => {
  let bookIndex = 0;
  for (books of buku) {
    if (books.id === bookId) return bookIndex;
    bookIndex++;
  }
  return -1;
};
