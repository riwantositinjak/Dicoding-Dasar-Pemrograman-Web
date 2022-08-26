document.addEventListener("DOMContentLoaded", () => {
  const formSubmit = document.getElementById("bookForm");
  formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    masukkanBuku();
  });
  if (checkStorage()) getData();
});

document.addEventListener("onDataSave", () => {
  alert("Data Saved");
});

document.addEventListener("onDataLoad", () => {
  perbaruiDataBuku();
});
