

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