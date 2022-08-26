document.addEventListener("DOMContentLoaded", () => {
    const formSubmit = document.getElementById("form");
    formSubmit.addEventListener("submit", (e) => {
        e.preventDefault();
        masukkanBuku();
    });
    if (checkStorage()){ 
        getData();
    }
});

document.addEventListener("onDataSave", () => {
    alert("Data Saved");
})

document.addEventListener('onDataLoad', () => {
    perbaruiDataBuku();
});