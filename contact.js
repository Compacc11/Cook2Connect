// This is your external JS file, "script.js"

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent the default form submission
  
      var form = this;
      var successMessage = document.getElementById('success-message');
  
      fetch(form.action, {
        method: form.method,
        body: new FormData(form),
      })
      .then(response => {
        if (response.ok) {
          form.reset();  // Reset the form
          successMessage.style.display = 'block';  // Show the success message
        } else {
          alert('Something went wrong. Please try again later.');
        }
      })
      .catch(error => {
        alert('There was a problem with the submission.');
      });
    });
  });