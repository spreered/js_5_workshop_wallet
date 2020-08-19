window.addEventListener('DOMContentLoaded',function(){
  let form = window.document.forms['item-form']
  
form.addEventListener('submit',function(e){
  e.preventDefault();
  let category = form.elements['category'].value
  let date = form.elements['date'].value
  let amount = form.elements['amount'].value
  let description = form.elements['description'].value
  let arrayObj = []
  let newArray =[]
  let getItem = localStorage.getItem('records')
  let listObj = {
    date,
    category,
    amount,
    description
  }
  arrayObj.push(listObj)
  console.log(arrayObj)

  

})
})
