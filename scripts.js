function showDetails(product) {
    alert(`Visa mer information om ${product}`);
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Tack för ditt meddelande! Vi kommer att kontakta dig snart.');
});
