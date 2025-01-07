document.addEventListener("DOMContentLoaded", function () {
    //Nav
    let navItems = ["Pocetna", "Udruzenje", "Udomi", "Autor"];
    let navLinks = ["index.html", "o-nama.html", "udomi.html", "autor.html"];

    let navMenu = document.getElementById("navMenu");

    //Petlja dodaje podatke u nav
    for (let i = 0; i < navItems.length; i++) {
        let li = document.createElement("li");
        li.classList.add("nav-item");

        let a = document.createElement("a");
        a.classList.add("nav-link");
        a.href = navLinks[i];
        a.textContent = navItems[i];

        li.appendChild(a);
        navMenu.appendChild(li);
    }
});


//Footer
let footerItems = ["Pocetna", "Udruzenje", "Udomi","Autor"];
let footerLinkovi = ["index.html", "o-nama.html", "udomi.html","autor.html"];

let footerLink = document.getElementById("footerLinks");


for (let i = 0; i < footerItems.length; i++) {
    let li = document.createElement("li");

    let a = document.createElement("a");
    a.href = footerLinkovi[i];
    a.textContent = footerItems[i];

    li.appendChild(a);
    footerLinks.appendChild(li);
}

let Onama = ["Vesela Šapica je udruženje posvećeno zaštiti napuštenih životinja, sigurnost i priliku za novi dom."];

let footerOnama = document.getElementById("footeronama");

for (let i = 0; i < Onama.length; i++) {
    let p = document.createElement("p");
    p.textContent = Onama[i]; 
    if (footerOnama.children.length >= 1) {
        footerOnama.insertBefore(p, footerOnama.children[1]); // Ubacivanje pre drugog elementa
    } else {
        footerOnama.appendChild(p); // Ako nema dovoljno elemenata, dodaj na kraj
    }
}
// footer contacts
let contactLabels = ["Email", "Telefon", "Adresa"];
let contactValues = ["support@animals.org", "+381 919 8921", "Zdravka Čelara 16"];

let contactInfoDiv = document.getElementById("contact-info");

for (let i = 0; i < contactLabels.length; i++) {
    let p = document.createElement("p");
    p.textContent = `${contactLabels[i]}: ${contactValues[i]}`;
    contactInfoDiv.appendChild(p);
}

// Drustvene mreze
let socialIcon = ["fab fa-instagram", "fab fa-twitter", "fab fa-facebook", "fab fa-linkedin", "fab fa-youtube", "fas fa-sitemap","fas fa-robot"];
let socialLinkovi = ["https://www.instagram.com/yourprofile",
    "https://twitter.com/yourprofile",
    "https://www.facebook.com/yourprofile",
    "https://www.linkedin.com/in/yourprofile",
    "https://www.youtube.com/yourprofile",
    "assets/admin/sitemap.xml",
    "assets/admin/robots.txt"];
let socialName = ["Instagram", "Twitter", "Facebook", "LinkedIn", "YouTube","Sitemap","Robots"];

let drustvene_mreze = document.getElementById("social");

for (let i = 0; i < socialIcon.length; i++) {
    let a = document.createElement("a");
    a.href = socialLinkovi[i];
    a.target = "_blank";  
    a.style.textDecoration = "none";  
    a.classList.add("social");

    let textNode = document.createTextNode(socialName[i] + " "); 

    a.appendChild(textNode);

    let icon = document.createElement("i");
    icon.className = socialIcon[i];

    a.appendChild(icon);

    drustvene_mreze.appendChild(a);
}