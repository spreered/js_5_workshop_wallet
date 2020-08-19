window.addEventListener("DOMContentLoaded", function() {
  const inputForm = document.forms[1];
  inputForm.addEventListener("submit", function(e) {
    // e.preventDefault();
    let revenue = {
      date: inputForm.date.value,
      category: inputForm.category.value,
      amount: inputForm.amount.value,
      description: inputForm.description.value
    }
    console.log(revenue);
  })
});