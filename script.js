// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get form input values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      // Simple form validation
      if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
      } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
      } else {
        // Form is valid, you can perform further actions (e.g., send data to server)
        alert('Form submitted successfully!');
        // Here you can add code to send form data to a server using fetch or other methods
      }
    });
  
    // Function to validate email format using a simple regular expression
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  