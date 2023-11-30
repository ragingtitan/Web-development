document.addEventListener('DOMContentLoaded',()=>{
    const contactbtn=document.getElementById("contact");
    contactbtn.addEventListener('click',()=>{
        let contactFormHTML =
        '<div class="container">' +
            '<div class="contact-form">' +
                '<h1 class="form-title">Contact Us</h1>' +
                '<p class="form-description">Have a question or feedback? Reach out to us!</p>' +
                '<form id="contactForm" class="form" onsubmit="submitForm(event)">' +
                    '<label for="name" class="label">Name:</label>' +
                    '<input type="text" id="name" name="name" class="input" required>' +
                    '<label for="email" class="label">Email:</label>' +
                    '<input type="email" id="email" name="email" class="input" required>' +
                    '<label for="message" class="label">Message:</label>' +
                    '<textarea id="message" name="message" class="input textarea" rows="4" required></textarea>' +
                    '<button type="submit" class="btn btn-outline-success button">Send Message</button>' +
                '</form>' +
            '</div>' +
        '</div>';

    // Use innerHTML to add the form to a specific element
    document.getElementById('body').innerHTML = DOMPurify.sanitize(contactFormHTML);
    });
    

});