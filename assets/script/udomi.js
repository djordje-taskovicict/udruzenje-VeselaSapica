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
    { src: 'images/image10.jpg', title: 'živojin', text: 'Ovo je mačak Živojin.' },
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
