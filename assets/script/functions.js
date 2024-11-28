//Nav
let navItems = ["Pocetna", "O nama", "Udomi", "Obavestenja"];
let navLinks = ["index.html", "o-nama.html", "udomi.html", "obavestenja.html"];

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
//Footer
let footerItems = ["Pocetna", "O nama", "Udomi", "Obavestenja"];
let footerLinkovi = ["index.html", "o-nama.html", "udomi.html", "obavestenja.html"];

let footerLink = document.getElementById("footerLinks");


for (let i = 0; i < footerItems.length; i++) {
    let li = document.createElement("li");

    let a = document.createElement("a");
    a.href = footerLinkovi[i];
    a.textContent = footerItems[i];

    li.appendChild(a);
    footerLinks.appendChild(li);
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
let socialIcon = ["fab fa-instagram", "fab fa-twitter", "fab fa-facebook", "fab fa-linkedin", "fab fa-youtube"];
let socialLinkovi = ["https://www.instagram.com/yourprofile",
    "https://twitter.com/yourprofile",
    "https://www.facebook.com/yourprofile",
    "https://www.linkedin.com/in/yourprofile",
    "https://www.youtube.com/yourprofile"];
let socialName = ["Instagram", "Twitter", "Facebook", "LinkedIn", "YouTube"];

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

//Slajder
// Nizovi sa podacima (slikama, tekstovima i dugmetima)
let Slike = [
    "img/Vesela_Sapica.jpg",
    "img/Pas_u_kavezu.jpg",
    "img/blog.jpg"
];

let text = [
    "Dobrodosli na sajt udruzenja Vesela Šapica!",
    "I mi zelimo dom, udomi ne kupuj!",
    "Pogledajte najnovija obavestenja!"
];

let dugmetxt = [
    "Saznaj vise",
    "Zakazi upoznavanje sa psom/mackom",
    "Blog"
];

let dugmad = [
    "#learn-more",
    "#discover-more",
    "#join-us"
];

let Opisi = [
    "Klikom na dugme ispod mozete saznati vise o nasem udruzenju.",
    "Mozete pogledati pse/macke koje su trenutno kod nas, a mozete i zakazati upoznavanje sa psom/mackom koji su Vam se svideli.",
    "Pogledajte nas blog gde kacimo zanimljive cinjenice o psima/mackama kao i obavestenja ko od nasih pasa/macaka je nasao svoj Zauvek dom."
];

let carouselInner = document.getElementById("carouselItems");

for (let i = 0; i < Slike.length; i++) {
    let div = document.createElement("div");
    div.classList.add("carousel-item");

    if (i === 0) {
        div.classList.add("active"); 
    }

    let img = document.createElement("img");
    img.src = Slike[i];
    img.classList.add("d-block", "w-100"); 
    img.alt = `Slide ${i + 1}`;

    let caption = document.createElement("div");
    caption.classList.add("carousel-caption", "d-none", "d-md-block");

    // Naslov
    let h5 = document.createElement("h5");
    h5.textContent = text[i];

    let p = document.createElement("p");
    p.textContent = Opisi[i];

    // Dugme ispod teksta
    let button = document.createElement("a");
    button.classList.add("btn", "btn-primary");
    button.href = dugmad[i];
    button.textContent = dugmetxt[i];

    // Dodavanje naslova, teksta i dugmeta u caption
    caption.appendChild(h5);
    caption.appendChild(p);
    caption.appendChild(button);

    div.appendChild(img);
    div.appendChild(caption);

    // Dodavanje novog itema u carousel
    carouselInner.appendChild(div);
}

let opis = "Vesela Šapa je udruženje posvećeno zbrinjavanju napuštenih";
    opis+= "životinja i njihovom udomljavanju.Naša misija je stvaranje sigurnih";
    opis += "domova za sve pse i mačke i edukacija zajednice o važnosti odgovornog vlasništva.";
    opis+="Pružimo svakoj šapi priliku za srećan život!";

let textOnama = document.getElementById("textOnama");
let p = document.createElement("p");
p.textContent = opis;

textOnama.appendChild(p);

//Grafik
let godina = ['2019', '2020', '2021', '2022', '2023'];
let brojZivotinja = [100, 125, 150, 300, 350];

let ctx = document.getElementById('animalChart').getContext('2d');

let animalChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        datasets: [{
            label: 'Broj napuštenih životinja',
            data: [100, 125, 150, 300, 350],
            backgroundColor: 'rgba(76, 175, 80, 0.75)',
            borderColor: 'rgba(56, 142, 60, 1)',
            fill: true,
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        animation: {
            duration: 3000,
            easing: 'easeInOutQuad'
        }
    }
});
//FAQ

let questions = ["Kako mogu postati volonter?",
    "Kako mogu donirati?",
    "Gde mogu udomiti životinju?"];

let answers = ["Da biste postali volonter, možete popuniti naš online formular ili nas kontaktirati putem telefona.",
    "Donacije možete izvršiti putem naše stranice za donacije ili nas kontaktirati za dodatne informacije.",
    "Pogledajte našu sekciju 'Udomi' za životinje koje su trenutno dostupne za udomljavanje."];

document.addEventListener("DOMContentLoaded", function () {
    let faqContainer = document.getElementById("faq-container");

    for (let i = 0; i < questions.length; i++) {
        // Kreiraj div za svaki FAQ item
        let faqItem = document.createElement("div");
        faqItem.classList.add("faq-item");
        //Pitanje
        let questionElement = document.createElement("h5");
        questionElement.classList.add("faq-question");
        questionElement.textContent = questions[i];
        //Odgovor
        let answerElement = document.createElement("p");
        answerElement.classList.add("faq-answer");
        answerElement.textContent = answers[i];
        answerElement.style.display = "none";

        //Dodavanje u FAQ
        faqItem.appendChild(questionElement);
        faqItem.appendChild(answerElement);

        //Dodavanje u glavni kontejner
        faqContainer.appendChild(faqItem);
    }

    // Dodaj funkcionalnost za otvaranje/zatvaranje odgovora na klik
    let questionsElements = document.querySelectorAll(".faq-question");
    questionsElements.forEach(function (question) {
        question.addEventListener("click", function () {
            let answer = question.nextElementSibling;
            // Toggle prikaza odgovora
            $(answer).slideToggle("fast");
        });
    });
});

