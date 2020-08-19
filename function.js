window.addEventListener('DOMContentLoaded', function () {
  var formSubmit = document.forms[1]
  formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
 
    var oldItems = JSON.parse(localStorage.getItem('records')) || [];
    var newItem = {
      category: formSubmit['category'].value,
      date: formSubmit['date'].value,
      amount: formSubmit['amount'].value,
      description: formSubmit['description'].value,
    };

    oldItems.push(newItem)
    
    localStorage.setItem('records', JSON.stringify(oldItems));
    

    formSubmit['category'].value = '';
    formSubmit['date'].value = '';
    formSubmit['amount'].value = '';
    formSubmit['description'].value = '';
  })
})