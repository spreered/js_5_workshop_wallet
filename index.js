window.addEventListener("DOMContentLoaded", () => {
  const itemForm = window.document.forms["item-form"]
  itemForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    console.log({
      category: itemForm.elements.category.value,
      date: itemForm.elements.date.value,
      amount: itemForm.elements.amount.value,
      description: itemForm.elements.description.value,
    })

    itemForm.reset()
  })

  
})