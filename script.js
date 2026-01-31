// WhatsApp Business Integration
// Replace the phone number with the actual WhatsApp Business number
const WHATSAPP_NUMBER = '916361742765'; // Format: country code + number (no + or spaces)
const APPOINTMENT_MESSAGE = 'Hi Dr. Nikita, I would like to book an appointment.';

// Function to open WhatsApp chat
function openWhatsAppChat() {
    const encodedMessage = encodeURIComponent(APPOINTMENT_MESSAGE);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// Add event listeners to appointment buttons
document.addEventListener('DOMContentLoaded', function() {
    const appointmentBtn = document.getElementById('appointmentBtn');
    const appointmentBtn2 = document.getElementById('appointmentBtn2');

    if (appointmentBtn) {
        appointmentBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openWhatsAppChat();
        });
    }

    if (appointmentBtn2) {
        appointmentBtn2.addEventListener('click', function(e) {
            e.preventDefault();
            openWhatsAppChat();
        });
    }

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
});
