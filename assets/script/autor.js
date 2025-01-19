//Autor podaci

let Stavke = ["Ime i prezime", "Datum rođenja", "Završio srednju", "Broj indeksa", "Fakultet", "Broj telefona", "Adresa stanovanja","Dokumentacija:"];
let Odgovor = ["Đorđe Tašković", "20.08.2004", "Tehnička škola Mladenovac", "11/23", "Visoka ICT", "+381 66-437-260", "Nušićeva 9 Mladenovac","assets/admin/Đorđe Tašković11-23.pdf"];

let Autordiv = document.getElementById("textOautoru");

for (let i = 0; i < Stavke.length; i++) {
    let p = document.createElement("p");
    p.innerHTML = `<b>${Stavke[i]}:</b> ${Odgovor[i]}`;
    Autordiv.appendChild(p);
}
