// Podaci za slike, naslove i opise
const galleryData = [
    { src: 'images/image1.jpg', title: 'Mini', text: 'Ovo je Mini.' },
    { src: 'images/image2.jpg', title: 'Mica', text: 'Ovo je Mica.' },
    { src: 'images/image3.jpg', title: 'Izy i Bety', text: 'Ovo su štenci Izy i Bety.' },
    { src: 'images/image4.jpg', title: 'Mika', text: 'Ovo je Mika.' },
    { src: 'images/image5.jpg', title: 'Ljubiša/Bubi', text: 'Ovo je Bubi.' },
    { src: 'images/image6.jpg', title: 'Maza', text: 'Ovo je Maza.' },
    { src: 'images/image7.jpg', title: 'Aki', text: 'Ovo je Aki.' },
    { src: 'images/image8.jpg', title: 'Garfild', text: 'Ovo je mačak Garfild.' },
    { src: 'images/image9.jpg', title: 'Pera', text: 'Ovo je Pera.' },
    { src: 'images/image10.jpg', title: 'Živojin', text: 'Ovo je mačak Živojin.' },
    { src: 'images/image11.jpg', title: 'Vuki', text: 'Ovo je Vuki.' },
    { src: 'images/image12.jpg', title: 'Vukica', text: 'Ovo je mače Vukica.' },
    { src: 'images/image13.jpg', title: 'Mališa', text: 'Ovo je mače Mališa.' },
    { src: 'images/image14.jpg', title: 'Ava', text: 'Ovo je Ava.' },
    { src: 'images/image15.jpg', title: 'Astor', text: 'Ovo je Astor.' }
];

function createGallery(data) {
    const container = document.querySelector('.gallery-container'); // Pronalazi .gallery-container div

    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);

    data.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-12 col-md-4 col-sm-4 mb-4';

        const card = document.createElement('div');
        card.className = 'card';

        // Dodavanje slike
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title;
        img.className = 'card-img-top gallery-img';
        img.loading = 'lazy';
        card.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Dodavanje naslova
        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = item.title;
        cardBody.appendChild(title);

        // Dodavanje teksta
        const text = document.createElement('p');
        text.className = 'card-text';
        text.textContent = item.text;
        cardBody.appendChild(text);

        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
    });
}

// Pozivanje funkcije sa podacima
galleryData.length && createGallery(galleryData);


const dynamicText = `
  <p>Ako želite da upoznate određenog psa, molimo vas da popunite formu sa svojim osnovnim podacima, kao što su ime, prezime, email i željeni datum i vreme. Nakon toga, od vas će biti zatraženo da izaberete ljubimca kojeg biste želeli da upoznate, kao i tip ljubimca (pas ili mačka).</p>
  
  <p>Ako niste sigurni kojeg ljubimca želite da upoznate, slobodno popunite formu i odaberite tip ljubimca, a mi ćemo vam pomoći da pronađete odgovarajućeg psa ili mačku. Popunjavanjem ove forme, omogućujete nam da vas obavestimo o dostupnosti ljubimaca i zakažemo termin za upoznavanje.</p>
  
  <p>Vaši podaci će biti zaštićeni, a nakon uspešnog slanja forme, bićete obavešteni o daljim koracima.</p>
`;

document.getElementById('info-container').innerHTML = dynamicText;


const fields = [
    {
        label: 'Vaše ime:',
        id: 'name',
        type: 'text',
        pattern: '^[A-Za-zČĆĐŠŽčćđšž\\s]+$',
        errorMessage: 'Ime sme sadržati samo slova i razmake.'
    },
    {
        label: 'Vaše prezime:',
        id: 'surname',
        type: 'text',
        pattern: '^[A-Za-zČĆĐŠŽčćđšž\\s]+$',
        errorMessage: 'Prezime sme sadržati samo slova i razmake.'
    },
    {
        label: 'Vaša email adresa:',
        id: 'email',
        type: 'email',
        pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
        errorMessage: 'Unesite validnu email adresu (primer: korisnik@email.com).'
    },
    {
        label: 'Zakazite dan i vreme kada biste došli da upoznate potencijalnog ljubimca:',
        id: 'appointment-date',
        type: 'datetime-local',
        errorMessage: 'Morate odabrati validan datum i vreme.'
    },
    {
        label: 'Koga želite da upoznate:',
        id: 'pet-type',
        type: 'radio',
        options: ['Pas', 'Mačka'],
        errorMessage: 'Morate izabrati jednu opciju.'
    },
    {
        label: 'Izaberite ime ljubimca:',
        id: 'pet-name',
        type: 'dropdown',
        options: [],
        errorMessage: 'Da bi odabrali ljubimca kojeg želite upoznati morate da odaberete da li želite psa ili mačku.'
    },
    {
        type: 'checkbox',
        id: 'terms',
        label: 'Slažem se sa uslovima korišćenja',
        errorMessage: 'Morate se složiti sa uslovima korišćenja.'
    },
    {
        type: 'checkbox',
        id: 'privacy',
        label: 'Prihvatam politiku privatnosti',
        errorMessage: 'Morate prihvatiti politiku privatnosti.'
    }
];

const petNames = {
    Pas: ['', 'Mini', 'Betty', 'Izy', 'Ljubisa/Bubi', 'Maza', 'Aki', 'Pera', 'Vuki', 'Astor'],
    Mačka: ['', 'Mica', 'Mika', 'Garfild', 'Živojin', 'Vukica', 'Malisa', 'Ava']
};

const formContainer = document.getElementById('form-container');
const form = document.createElement('form');
form.action = "https://formspree.io/f/xvggvenz";
form.method = "POST";

// Dinamički kreiranje polja forme
fields.forEach(field => {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    if (field.type !== 'checkbox') {
        const label = document.createElement('label');
        label.htmlFor = field.id;
        label.textContent = field.label;
        formGroup.appendChild(label);
    }

    let inputElement;
    if (field.type === 'dropdown') {
        inputElement = document.createElement('select');
        inputElement.id = field.id;
        inputElement.name = field.id;
    } else if (field.type === 'radio') {
        const radioGroup = document.createElement('div');
        field.options.forEach(option => {
            const input = document.createElement('input');
            input.type = 'radio';
            input.id = `${field.id}-${option}`;
            input.name = field.id;
            input.value = option;

            input.addEventListener('change', () => {
                const petNameDropdown = document.getElementById('pet-name');
                petNameDropdown.innerHTML = '';
                petNames[option].forEach(petName => {
                    const optionElement = document.createElement('option');
                    optionElement.value = petName;
                    optionElement.textContent = petName;
                    petNameDropdown.appendChild(optionElement);
                });
            });

            const radioLabel = document.createElement('label');
            radioLabel.htmlFor = `${field.id}-${option}`;
            radioLabel.textContent = option;

            radioGroup.appendChild(input);
            radioGroup.appendChild(radioLabel);
        });
        inputElement = radioGroup;
    } else {
        inputElement = document.createElement('input');
        inputElement.type = field.type;
        inputElement.id = field.id;
        inputElement.name = field.id;
        if (field.pattern) inputElement.pattern = field.pattern;
        if (field.type === 'datetime-local') {
            inputElement.min = new Date().toISOString().slice(0, 16);
        }
    }

    formGroup.appendChild(inputElement);

    if (field.errorMessage) {
        const errorMessage = document.createElement('span');
        errorMessage.className = 'error-message';
        errorMessage.textContent = field.errorMessage;
        formGroup.appendChild(errorMessage);
    }

    form.appendChild(formGroup);
});

// Submit dugme
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Pošalji';
submitButton.className = 'button-forma';
form.appendChild(submitButton);

formContainer.appendChild(form);



