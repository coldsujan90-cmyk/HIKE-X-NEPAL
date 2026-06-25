const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navToggleItinerary = document.getElementById('navToggleItinerary');
const navLinksItinerary = document.getElementById('navLinksItinerary');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

if (navToggleItinerary && navLinksItinerary) {
  navToggleItinerary.addEventListener('click', () => {
    navLinksItinerary.classList.toggle('show');
  });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name')?.value || 'Guest';
    alert(`Thank you, ${name}! Your message has been received. We will contact you soon on WhatsApp or email.`);
    contactForm.reset();
  });
}

const paymentForm = document.getElementById('paymentForm');
if (paymentForm) {
  paymentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const cardName = document.getElementById('cardName')?.value.trim();
    const cardNumber = (document.getElementById('cardNumber')?.value || '').replace(/\D/g, '');
    const cardExpiry = document.getElementById('cardExpiry')?.value.trim();
    const cardCvc = document.getElementById('cardCvc')?.value.trim();
    const billingEmail = document.getElementById('billingEmail')?.value.trim();

    const expiryMatch = /^([0-1][0-9])\/(\d{2})$/.exec(cardExpiry);
    const isExpiryValid = expiryMatch && Number(expiryMatch[1]) >= 1 && Number(expiryMatch[1]) <= 12;
    const isCardNumberValid = cardNumber.length >= 13 && cardNumber.length <= 19;
    const isCvcValid = /^[0-9]{3,4}$/.test(cardCvc);

    if (!cardName || !isCardNumberValid || !isExpiryValid || !isCvcValid || !billingEmail) {
      alert('Please fill in all payment fields with valid card details.');
      return;
    }

    alert(`Payment submitted successfully for ${cardName}. We will send a confirmation to ${billingEmail}.`);
    paymentForm.reset();
  });
}

