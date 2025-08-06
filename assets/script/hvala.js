window.addEventListener('DOMContentLoaded', function () {
  // 1) Prvo izračunaj dinamički prefix za relativnu putanju
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

  // 2) Kreiraj thank-you container
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

  // Dodaj drugi paragraf sa dinamičkim linkom
  const para2 = document.createElement('p');
  const link = document.createElement('a');
  link.href = prefix + 'index.html';
  link.textContent = 'Vrati se na početnu stranicu.';
  para2.appendChild(link);
  thankYouContainer.appendChild(para2);

  // Dodaj u body
  document.body.appendChild(thankYouContainer);
});
