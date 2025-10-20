const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
link.addEventListener('click', function (e) {
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});
});
}


// Simple alert on form submit
const form = document.getElementById('contact-form');
if (form) {
form.addEventListener('submit', (e) => {
e.preventDefault();
alert('Your message has been submitted! Thank you.');
form.reset();
});
}
