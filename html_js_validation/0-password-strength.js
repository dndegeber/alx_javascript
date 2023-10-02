function validatePassword() {
    var password = document.getElementById('password').value;
    var errorElement = document.getElementById('error');
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (password.match(regex)) {
      errorElement.innerText = '';
      return true;
    } else {
      errorElement.innerText = 'Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one numeric digit, and one special character.';
      return false;
    }
  }
  
  document.getElementById('passwordForm').addEventListener('submit', function(event) {
    if (!validatePassword()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
  