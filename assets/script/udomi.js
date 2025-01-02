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
const formContainer = document.getElementById('form-container');
const form = document.createElement('form');

const fields = [
    {
        label: 'Vaše ime:',
        id: 'name',
        type: 'text',
        pattern: '^[A-Za-zČĆĐŠŽčćđšž\\s]+$',  // Ispravka za regex
        errorMessage: 'Ime sme sadržati samo slova i razmake.'
    },
    {
        label: 'Vaše prezime:',
        id: 'surname',
        type: 'text',
        pattern: '^[A-Za-zČĆĐŠŽčćđšž\\s]+$',  // Ispravka za regex
        errorMessage: 'Prezime sme sadržati samo slova i razmake.'
    },
    {
        label: 'Vaša email adresa:',
        id: 'email',
        type: 'email',
        errorMessage: 'Unesite validnu email adresu (primer: korisnik@email.com).'  // Uklonjen pattern
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
        errorMessage: 'Da bi odabrali ljubimca kojeg zelite upoznati morate da odaberete da li zelite psa ili Macku.'
    },
    {
        label: 'Slažem se sa uslovima korišćenja i politikom privatnosti:',
        id: 'terms',
        type: 'checkbox',
        errorMessage: 'Morate prihvatiti uslove korišćenja i politiku privatnosti.'
    },
    {
        label: 'Slažem se sa politikom privatnosti:',
        id: 'privacy-policy',
        type: 'checkbox',
        errorMessage: 'Morate prihvatiti politiku privatnosti.'  // Dodan novi checkbox za Privacy Policy
    }
];

const petNames = {
    Pas: ['', 'Mini', 'Betty', 'Izy', 'Ljubisa/Bubi', 'Maza', 'Aki', 'Pera', 'Vuki', 'Astor'],
    Mačka: ['', 'Mica', 'Mika', 'Garfild', 'Živojin', 'Vukica', 'Malisa', 'Ava']
};

fields.forEach(field => {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    if (field.type !== 'checkbox') {
        const label = document.createElement('label');
        label.htmlFor = field.id;
        label.textContent = field.label;
        formGroup.appendChild(label);
    }

    if (field.type === 'dropdown') {
        const select = document.createElement('select');
        select.id = field.id;
        select.name = field.id;
        formGroup.appendChild(select);
    } else if (field.type === 'radio') {
        const radioGroup = document.createElement('div');
        radioGroup.classList.add('radio-checkbox-group');  // Dodajemo klasu za Flexbox

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

        formGroup.appendChild(radioGroup);
    } else if (field.type === 'checkbox') {
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = field.id;
        input.name = field.id;

        // Sada dodajemo samo jedan label za checkbox
        const checkboxLabel = document.createElement('label');
        checkboxLabel.htmlFor = field.id;
        checkboxLabel.textContent = field.label;

        formGroup.appendChild(input);
        formGroup.appendChild(checkboxLabel);  // Ovaj deo dodaje samo jedan label za checkbox
    } else {
        const input = document.createElement('input');
        input.type = field.type;
        input.id = field.id;
        input.name = field.id;
        if (field.pattern) input.pattern = field.pattern;

        formGroup.appendChild(input);
    }

    if (field.errorMessage) {
        const errorMessage = document.createElement('span');
        errorMessage.className = 'error-message';
        errorMessage.textContent = field.errorMessage;
        formGroup.appendChild(errorMessage);
    }

    form.appendChild(formGroup);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorMessage = input?.nextElementSibling;  // Optional chaining za nextElementSibling

        if (!input) return; // Ako input ne postoji, preskoči dalje

        // Provera za radio button
        if (field.type === 'radio') {
            const selectedRadio = document.querySelector(`input[name="${field.id}"]:checked`);
            if (!selectedRadio) {
                isValid = false;
                // Ako radio nije izabran, dodajemo grešku
                if (errorMessage) errorMessage.classList.add('active');
                // Dodajemo klasu 'error' za sve radio dugmadi
                const radioButtons = document.querySelectorAll(`input[name="${field.id}"]`);
                radioButtons.forEach(radio => radio.classList.add('error'));
            } else {
                // Ako je neko dugme izabrano, uklanjamo grešku
                if (errorMessage) errorMessage.classList.remove('active');
                const radioButtons = document.querySelectorAll(`input[name="${field.id}"]`);
                radioButtons.forEach(radio => radio.classList.remove('error'));
            }
            return;
        }

        // Provera za checkbox
        if (field.type === 'checkbox') {
            if (!input.checked) {
                isValid = false;
                input.classList.add('error');
                if (errorMessage) errorMessage.classList.add('active');
            } else {
                input.classList.remove('error');
                input.classList.add('success');
                if (errorMessage) errorMessage.classList.remove('active');
            }
            return;
        }

        // Validacija za ostale inpute (text, email, itd.)
        if (!input.value || (field.pattern && !new RegExp(field.pattern).test(input.value))) {
            isValid = false;
            input.classList.add('error');
            if (errorMessage) errorMessage.classList.add('active');
        } else {
            input.classList.remove('error');
            input.classList.add('success');
            if (errorMessage) errorMessage.classList.remove('active');
        }
    });

    if (isValid) {
        alert('Forma je uspešno poslata!');
    }
});

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Pošalji';

form.appendChild(submitButton);
formContainer.appendChild(form);


