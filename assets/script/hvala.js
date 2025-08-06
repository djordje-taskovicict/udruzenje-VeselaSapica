window.addEventListener('DOMContentLoaded', function () {
    const thankYouContainer = document.createElement('div');
    thankYouContainer.classList.add('thank-you-container');

    // Dodaj naslov
    const heading = document.createElement('h1');
    heading.textContent = 'Hvala na vašoj prijavi!';
    thankYouContainer.appendChild(heading);

    // Dodaj prvi paragraf
    const para1 = document.createElement('p');
    para1.textContent = 'Vaš formular je uspešno poslat. Bićemo u kontaktu uskoro.';
    thankYouContainer.appendChild(para1);

    // Dodaj drugi paragraf sa linkom
    const para2 = document.createElement('p');
    const link = document.createElement('a');
     link.href = '/';
    link.textContent = 'Vrati se na početnu stranicu.';
    para2.appendChild(link);
    thankYouContainer.appendChild(para2);

    // Dodaj dinamicki sadržaj u body
    document.body.appendChild(thankYouContainer);
});
