window.addEventListener("DOMContentLoaded", function() {
  const inputForm = document.forms[1];
  const records = document.querySelector("#records-panel");
  const template = document.querySelector("#temp");
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

    inputForm.reset();

    generateRecord(revenue);
    // console.log(generateRecord(revenue));
  })


  function generateRecord(revenue) {
    let item = template.content.querySelector("tr.item");

    let date = template.content.querySelector("th");
    date.textContent = revenue.date;

    let category = template.content.querySelector("#category");
    category.textContent = revenue.category;

    let description = template.content.querySelector("#description");
    description.textContent = revenue.description;

    let amount = template.content.querySelector("#amount");
    amount.textContent = revenue.amount;

    let cross = template.content.querySelector("span.remove");
    cross.textContent = "x";

    let remove = template.content.querySelector("#remove");
    remove.appendChild(cross);
    
    item.appendChild(date);
    item.appendChild(category);
    item.appendChild(description);
    item.appendChild(amount);
    item.appendChild(remove);

    let clone = document.importNode(template.content, true);
    records.prepend(clone);
  }
});