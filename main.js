window.addEventListener('DOMContentLoaded',function(){

// console.log(document.querySelectorAll('.form-control'))
let form = document.forms[1]
form.addEventListener('submit',function(e){
  e.preventDefault()
  console.log({ 
    date: form.date.value,
    category: form.category.value,
    description: form.description.value,
    amount: form.amount.value 
  }) 
  // 先用智障做法
  form.date.value = ''
  form.category.value = '食'
  form.description.value = ''
  form.amount.value = ''
})

})