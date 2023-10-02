function handleFormSubmit(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var errorElement = document.getElementById('error');
  
    if (name.trim() === '' || email.trim() === '') {
      errorElement.innerText = 'Please fill in all required fields.';
    } else {
      errorElement.innerText = '';
      var successElement = document.getElementById('success');
      successElement.innerText = 'Form submitted successfully!';
    }
  }
  
  document.getElementById('submitForm').addEventListener('submit', handleFormSubmit);
  