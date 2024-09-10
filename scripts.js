document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;

        // Here you would typically send this data to a server
        // For now, we'll just log it to the console
        console.log('Form submitted:', { name, email, message });

        // Clear the form
        this.reset();
        alert('Thank you for your message! We will get back to you soon.');
    });

    const entryScreen = document.getElementById('entry-screen');
    const enterSiteBtn = document.getElementById('enter-site');

    enterSiteBtn.addEventListener('click', function() {
        document.body.classList.add('entered');
        entryScreen.style.display = 'none'; // This line hides the entry screen
    });
});
