function generateInputFields(numFields) {
    var inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = '';
  
    for (var i = 1; i <= numFields; i++) {
      var inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.name = 'field' + i;
      inputField.placeholder = 'Field ' + i;
      inputContainer.appendChild(inputField);
    }
  }
  
  function validateForm(event) {
    var inputs = document.querySelectorAll('#inputContainer input');
    var allFilled = true;
  
    inputs.forEach(function(input) {
      if (input.value.trim() === '') {
        allFilled = false;
      }
    });
  
    if (!allFilled) {
      alert('Please fill in all fields');
      event.preventDefault();
    }
  }
  
  document.getElementById('dynamicForm').addEventListener('submit', validateForm);
  
  document.getElementById('numFields').addEventListener('change', function() {
    var numFields = parseInt(this.value);
    generateInputFields(numFields);
  });
  
  // Initial call to generateInputFields with default value
  generateInputFields(1);
  