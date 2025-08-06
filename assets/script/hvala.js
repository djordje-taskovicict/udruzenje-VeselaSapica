window.addEventListener('DOMContentLoaded', function () {
       // 1) Ubaci ovo NA VRH funkcije, pre nego što kreiraš link:
  const path = window.location.pathname;
  console.log('Pathname:', path);

  const segments = path
    .split('/')           // razdvoji po “/”
    .filter(Boolean);     // izbaci prazne delove
  console.log('Segments:', segments);

  const depth = segments.length - 1;
  console.log('Depth:', depth);

  const prefix = '../'.repeat(depth);
  console.log('Prefix:', prefix);

  // 2) Onda kreiraj link i postavi href sa dinamičkim prefixom:
  const thankYouContainer = document.createElement('div');
  thankYouContainer.classList.add('thank-you-container');

  // ... (tvoje ostalo kreiranje elemenata)

  const para2 = document.createElement('p');
  const link = document.createElement('a');
  link.href = prefix + 'index.html';
  link.textContent = 'Vrati se na početnu stranicu.';
  para2.appendChild(link);
  thankYouContainer.appendChild(para2);

  document.body.appendChild(thankYouContainer);
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
