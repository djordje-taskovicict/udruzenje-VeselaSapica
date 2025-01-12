// Podaci za slike, naslove i opise
const galleryData = [
    { src: 'images/image1.jpg', title: 'Mini', text: 'Mini je ljubazna kuca koja traži ljubav i pažnju.' },
    { src: 'images/image2.jpg', title: 'Mica', text: 'Mica je vesela maca koja čeka dom pun pažnje.' },
    { src: 'images/image3.jpg', title: 'Izy i Bety', text: 'Izy i Bety su dva vesela stenca koji žele novi dom.' },
    { src: 'images/image4.jpg', title: 'Mika', text: 'Mika je predivna maca koja voli da se mazi.' },
    { src: 'images/image5.jpg', title: 'Bubi', text: 'Bubi je miran pas koji voli spavati i biti voljen.' },
    { src: 'images/image6.jpg', title: 'Maza', text: 'Maza je draga kuca koja čeka ljubavnu porodicu.' },
    { src: 'images/image7.jpg', title: 'Aki', text: 'Aki je nežan pas koji se raduje novoj porodici.' },
    { src: 'images/image8.jpg', title: 'Garfild', text: 'Garfild je zabavna maca koja voli da spava.' },
    { src: 'images/image9.jpg', title: 'Pera', text: 'Pera je veran pas koji želi biti deo porodice.' },
    { src: 'images/image10.jpg', title: 'Živojin', text: 'Živojin je hrabar mačak koji zaslužuje pažnju i ljubav.' },
    { src: 'images/image11.jpg', title: 'Vuki', text: 'Vuki je energičan pas koji voli trčanje, decu i igru.' },
    { src: 'images/image12.jpg', title: 'Vukica', text: 'Vukica je nežna maca koja voli da se mazi.' },
    { src: 'images/image13.jpg', title: 'Mališa', text: 'Mališa je mačak koji traži sigurnost i ljubavnu porodicu.' },
    { src: 'images/image14.jpg', title: 'Ava', text: 'Ava je vesela maca koja traži svoj novi dom.' },
    { src: 'images/image15.jpg', title: 'Astor', text: 'Astor je odan pas koji voli da provodi vreme sa ljudima.' }
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
        pattern: '^[A-Za-zČĆĐŠŽčćđšž\\s]+$',  // Ispravljeno za karaktere sa dijakritikom
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
        pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',  // Ispravljeno da funkcioniše u HTML-u
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

// Funkcije za kreiranje polja
const createInputField = (field) => {
    const input = document.createElement('input');
    input.type = field.type;
    input.id = field.id;
    input.name = field.id;
    if (field.pattern) input.pattern = field.pattern;
    if (field.id === 'appointment-date') {
        input.min = new Date().toISOString().slice(0, 16); // Disable past dates
    }
    return input;
};

const createDropdown = (field) => {
    const select = document.createElement('select');
    select.id = field.id;
    select.name = field.id;
    return select;
};

const createRadioButtons = (field) => {
    const radioGroup = document.createElement('div');
    radioGroup.classList.add('radio-checkbox-group');

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

    return radioGroup;
};

const setErrorState = (input, errorMessageElement, hasError) => {
    if (hasError) {
        input.classList.add('error');
        input.classList.remove('success');
        errorMessageElement?.classList.add('active');
    } else {
        input.classList.remove('error');
        input.classList.add('success');
        errorMessageElement?.classList.remove('active');
    }
};

const formContainer = document.getElementById('form-container');
const form = document.createElement('form');
form.action = 'https://formspree.io/f/xvggvenz';  // Formspree URL
form.method = 'POST';

// Dinamičko kreiranje formi
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
        inputElement = createDropdown(field);
    } else if (field.type === 'radio') {
        inputElement = createRadioButtons(field);
    } else if (field.type === 'checkbox') {
        inputElement = createInputField(field);
        const checkboxLabel = document.createElement('label');
        checkboxLabel.htmlFor = field.id;
        checkboxLabel.textContent = field.label;
        formGroup.appendChild(inputElement);
        formGroup.appendChild(checkboxLabel);
    } else {
        inputElement = createInputField(field);
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

// Dodavanje submit dugmeta
const submitButton = document.createElement('button');
submitButton.className = 'button-forma';
submitButton.type = 'submit';
submitButton.textContent = 'Pošalji';

form.appendChild(submitButton);
formContainer.appendChild(form);

// Obrada slanja forme
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorMessage = input?.nextElementSibling;

        if (!input) return;

        if (field.type === 'radio') {
            const selectedRadio = document.querySelector(`input[name="${field.id}"]:checked`);
            setErrorState(input, errorMessage, !selectedRadio);
            isValid = isValid && !!selectedRadio;
            return;
        }

        if (field.type === 'checkbox') {
            setErrorState(input, errorMessage, !input.checked);
            isValid = isValid && input.checked;
            return;
        }

        const hasError = !input.value || (field.pattern && !new RegExp(field.pattern).test(input.value));
        setErrorState(input, errorMessage, hasError);
        isValid = isValid && !hasError;
    });

    if (isValid) {
        // Submit form data to Formspree (Using fetch API)
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                window.location.href = 'hvala.html';  // Redirekcija na thank you stranicu
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});


