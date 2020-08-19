window.addEventListener("DOMContentLoaded", function() {
  const inputForm = document.forms[1];
  let local = [];
  inputForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let revenue = {
      date: inputForm.date.value,
      category: inputForm.category.value,
      amount: inputForm.amount.value,
      description: inputForm.description.value
    }
    local.push(revenue);
    localStorage.setItem("records", JSON.stringify(local));
    console.log(JSON.parse(localStorage.getItem("records")));
  })
});