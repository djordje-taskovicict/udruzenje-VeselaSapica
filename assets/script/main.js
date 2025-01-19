

// Slajder
// Nizovi sa podacima (slikama, tekstovima i dugmetima)
let Slike = [
    "img/Vesela_Sapica.jpg",
    "img/Pas_u_kavezu.jpg"
];

let text = [
    "Udružnje Vesela Šapica!",
    "I mi zelimo dom, udomi ne kupuj!"
];

let dugmetxt = [
    "Saznaj vise",
    "Zakazi",
];

let dugmad = [
    "o-nama.html",
    "Udomi.html"
];

let Opisi = [
    "Klikom na dugme možete saznati više o našem udruženju.",
    "Klikom na dugme možete pogledati i zakazati upoznavanje sa životinjama."
];

let carouselInner = document.getElementById("carouselItems");

for (let i = 0; i < Slike.length; i++) {
    let div = document.createElement("div");
    div.classList.add("carousel-item");

    if (i === 0) {
        div.classList.add("active");
    }

    // Postavljam sliku kao pozadinu
    div.style.backgroundImage = `url(${Slike[i]})`;
    div.style.backgroundSize = 'cover'; 
    div.style.backgroundPosition = 'center';

    let caption = document.createElement("div");
    caption.classList.add("carousel-caption");

    // Naslov
    let h5 = document.createElement("h5");
    h5.textContent = text[i];

    let p = document.createElement("p");
    p.textContent = Opisi[i];

    let button = document.createElement("a");
    button.classList.add("btn", "btn-primary");
    button.href = dugmad[i];
    button.textContent = dugmetxt[i];

    caption.appendChild(h5);
    caption.appendChild(p);
    caption.appendChild(button);

    div.appendChild(caption);

    carouselInner.appendChild(div);
}


let opis = "Vesela Šapica je udruženje posvećeno zbrinjavanju napuštenih";
opis += "životinja i njihovom udomljavanju.Naša misija je stvaranje sigurnih";
opis += "domova za sve pse i mačke i edukacija zajednice o važnosti odgovornog vlasništva.";
opis += "Pružimo svakoj šapi priliku za srećan život!";

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

let tekstDiv = document.querySelector('.tekst');

const tekst = document.createElement('p');

tekst.textContent = 'Vesela Šapica posvećena je pomoći napuštenim životinjama, pružajući im siguran dom i ljubav. Vaša podrška omogućava naš rad i pomaže da stvorimo bolje uslove za pse i mačke koje su u potrazi za novim domovima. Kroz naše akcije, ne samo da pružamo utočište za napuštene životinje, već i edukujemo zajednicu o odgovornom vlasništvu i važnosti brige za ljubimce.';

tekstDiv.appendChild(tekst);

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