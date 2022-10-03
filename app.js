console.log("app.js baglandı");

const kdvUcreti = 0.18;
const kargoUcreti = 15;
const kargoBedavaUcreti =300;

window.addEventListener("load", () => {
    localStorage.setItem("kdvUcreti", "kdv")
    localStorage.setItem("kargoUcreti", "kargo")
    localStorage.setItem("kargoBedavaUcreti", "bedava")

    sessionStorage.setItem("kdvUcreti", "kdv")
    sessionStorage.setItem("kargoUcreti", "kargo")
    sessionStorage.setItem("kargoBedavaUcreti", "bedava")
    

});




