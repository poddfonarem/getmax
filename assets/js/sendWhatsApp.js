function sendWhatsApp() {
    let name = document.getElementById('name').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let selectedOptions = [];
    let checkboxes = document.querySelectorAll('input[name="checks"]:checked');

    checkboxes.forEach(function(checkbox) {
        selectedOptions.push(checkbox.value);
    });

    if (name === '' || phone === '' || selectedOptions.length === 0) {
        alert('Будь ласка, заповніть всі поля та виберіть принаймні одну послугу.');
        return;
    }

    let text = `Ім'я: ${name}.\nТелефон: ${phone}.\nПослуги: ${selectedOptions.join(', ')}.`;
    let encodedText = encodeURIComponent(text);
    let phoneNumber = "380665223172";
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappURL, '_blank');
}

function callingMe(){
    let phoneNumber = "380665223172";
    window.location.href = `tel:${phoneNumber}`;
}
