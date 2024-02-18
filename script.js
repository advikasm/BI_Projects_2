document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      
      // Get form data
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      // Here you can add code to send the form data to your backend or do any other action
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      
      // Optional: Display a confirmation message
      alert('Message sent successfully!');
      
      // Reset form fields
      contactForm.reset();
    });
  });
  