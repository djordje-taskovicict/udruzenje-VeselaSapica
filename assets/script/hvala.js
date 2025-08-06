window.addEventListener('DOMContentLoaded', function () {
  // Kreiramo container
  const thankYouContainer = document.createElement('div');
  thankYouContainer.classList.add('thank-you-container');

  // Naslov
  const heading = document.createElement('h1');
  heading.textContent = 'Hvala na vašoj prijavi!';
  thankYouContainer.appendChild(heading);

  // Prvi paragraf
  const para1 = document.createElement('p');
  para1.textContent = 'Vaš formular je uspešno poslat. Bićemo u kontaktu uskoro.';
  thankYouContainer.appendChild(para1);

  // Drugi paragraf sa linkom ka pravom repozitorijumu
  const para2 = document.createElement('p');
  const link = document.createElement('a');
  link.href = window.location.origin + '/udruzenje-VeselaSapica/';
  link.textContent = 'Vrati se na početnu stranicu.';
  para2.appendChild(link);
  thankYouContainer.appendChild(para2);

  // Ubacimo sve u body
  document.body.appendChild(thankYouContainer);
});
