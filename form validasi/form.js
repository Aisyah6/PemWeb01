let nama = document.getElementById("nama")
let email = document.getElementById("email")
let jam = document.getElementById("jam")
let tujuan = document.getElementById("tujuan")
let jumlah = document.getElementById("jumlah")
let span = document.getElementsByTagName("span")

function proses() {


if (nama.value =="siti aisah") {
    span[0].style.visibility = "visible"
}
if (email.value =="sa5412820@gmail.com") {
    span[1].style.visibility = "visible"
}
if (jam.value =="21.10") {
    span[2].style.visibility = "visible"
}
if (tujuan.value =="yogyakarta") {
    span[3].style.visibility = "visible"
}
if (jumlah.value =="3") {
    span[4].style.visibility = "visible"
    location.replace("sukses.html");
        alert("login Berhasil");
} else {
    alert("Login Gagal");
}

 }