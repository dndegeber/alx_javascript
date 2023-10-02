function validateEmail() {
    var email = document.getElementById('email').value;
    var errorElement = document.getElementById('error');
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (email.match(regex)) {
      errorElement.innerText = '';
      return true;
    } else {
      errorElement.innerText = 'Please enter a valid email address.';
      return false;
    }
  }
  
  document.getElementById('emailForm').addEventListener('submit', function(event) {
    if (!validateEmail()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
  