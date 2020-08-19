window.addEventListener('DOMContentLoaded', function(){
  var formSubmit = document.forms[1]
  formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log({
      category: formSubmit['category'].value,
      date: formSubmit['date'].value,
      amount: formSubmit['amount'].value,
      description: formSubmit['description'].value,
    })
    
    formSubmit['category'].value = '';
    formSubmit['date'].value = '';
    formSubmit['amount'].value = '';
    formSubmit['description'].value = '';
  })
})