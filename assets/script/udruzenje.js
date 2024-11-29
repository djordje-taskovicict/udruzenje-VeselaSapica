let textOnama = [
    "Vesela Šapica je udruženje koje se već godinama posvećuje brizi za napuštene životinje, pružajući im ljubav, sigurnost i priliku za novi početak. Naša misija je da svako napušteno biće, bilo pas ili mačka, dobije šansu za srećan život u sigurnom domu. Naš tim se sastoji od posvećenih volontera koji svakodnevno rade na zbrinjavanju, lečenju i udomljavanju životinja.",
    "",
    "Svake godine hiljade životinja ostaju bez svog doma, a udruženje Vesela Šapica se bori da im obezbedi bolji život. Ne samo da pružamo privremeni smeštaj, već edukujemo zajednicu o važnosti odgovornog vlasništva, kako bi se sprečilo dalje napuštanje i zlostavljanje životinja.",
    "",
    "Kroz različite projekte i kampanje, trudimo se da podignemo svest o potrebi za udomljavanjem, umesto kupovine, i o tome kako svaka životinja zaslužuje šansu za srećan život. Naš rad uključuje pružanje veterinarske nege, kao i organizaciju događanja koja omogućavaju ljudima da se upoznaju sa životinjama koje čekaju svoj zauvek dom."
];

// Preuzimanje referenci na HTML element
let aboutSection = document.getElementById("onamatxt");

// Dodavanje dinamičkog teksta u HTML
textOnama.forEach(paragraph => {
    let p = document.createElement("p");
    p.innerHTML = paragraph + "<br>"; 
    aboutSection.appendChild(p);
});

// Podaci za Donacije i Volontiranje
let Textdonacija = "Vaša donacija nam pomaže da obezbedimo hranu, medicinsku negu i sigurno okruženje za naše životinje. Svaka pomoć je od ogromnog značaja! Vaša podrška omogućava životinjama da dobiju šansu za srećan život u sigurnim domovima. Pomoću vaših donacija, možemo pokriti troškove lečenja, hrane, i smeštaja. Naša misija je da stvorimo svet gde nijedna životinja neće biti napuštena.";
let Textvolontiranja = "Postanite Volonter u Veseloj Šapici.";

Textvolontiranja += "Volontiranje je srce našeg rada.Kao volonter u udruženju Vesela Šapica, možete direktno uticati na život naših šapa, mačaka i drugih napuštenih životinja.Pomoć koju pružate, bilo da je u pitanju svakodnevna briga o životinjama, organizacija događanja, ili pomoć u administrativnim poslovima, od ogromnog je značaja za nas i naše šape. Vaš doprinos je nezamenjiv";

Textvolontiranja += "Volontiranjem ne samo da pomažete životinjama koje čekaju svoj zauvek dom, već i zajednici.Kroz naše volonterske programe, imate priliku da naučite više o brizi za životinje, kao i o odgovornom vlasništvu.Takođe, svaki volonter postaje deo tima posvećenih ljudi koji veruju u misiju Vesela Šapica.";


let donacijeTxt = document.getElementById("donacije");
let volontiranjeTxt = document.getElementById("volontiranje");

// Dodavanje dinamickog teksta u HTML
donacijeTxt.textContent = Textdonacija;
volontiranjeTxt.textContent = Textvolontiranja;

// Podaci o broju spašenih pasa i mačaka
const data = {
    labels: ['2019', '2020', '2021', '2022', '2023'], // Godine
    datasets: [
        {
            label: 'Spašeni Pasi',
            data: [50, 80, 100, 200, 250], // Broj pasa spašenih svake godine
            borderColor: 'rgba(0, 123, 255, 1)', 
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            fill: true,
        },
        {
            label: 'Spašene Mačke',
            data: [30, 50, 80, 120, 200], // Broj mačaka spašenih svake godine
            borderColor: 'rgba(40, 167, 69, 1)',
            backgroundColor: 'rgba(40, 167, 69, 0.2)',
            fill: true,
        }
    ]
};

// Kreiranje grafika
const ctx = document.getElementById('rescueChart').getContext('2d');
const rescueChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Broj  spašenih pasa i mačaka u Poslednjih 5 Godina'
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const successGoalsSection = document.getElementById("uspesi-postignuca");

    // Uspeh i ciljevi udruženja
    const content = [
        {
            title: "Naši uspesi",
            items: [
                "Spašeno preko 500 životinja u poslednjih 5 godina.",
                "Organizovane brojne edukativne radionice o odgovornom vlasništvu.",
                "Pokrenuti programi za sterilizaciju i vakcinaciju napuštenih životinja."
            ]
        },
        {
            title: "Naši ciljevi",
            items: [
                "Povećanje kapaciteta za smeštaj napuštenih životinja.",
                "Jačanje volonterske mreže širom zemlje.",
                "Podizanje svesti o važnosti udomljavanja, a ne kupovine ljubimaca."
            ]
        }
    ];

    // Kreiranje sadržaja
    content.forEach(({ title, items }) => {
        successGoalsSection.innerHTML += `
            <h3>${title}</h3>
            <ul>
                ${items.map(item => `<li>${item}</li>`).join("")}
            </ul>
        `;
    });
});
