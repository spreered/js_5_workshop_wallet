window.addEventListener('DOMContentLoaded',function(){
  let form = window.document.forms['item-form']
  
form.addEventListener('submit',function(e){
  e.preventDefault();
  let category = form.elements['category'].value
  let date = form.elements['date'].value
  let amount = form.elements['amount'].value
  let description = form.elements['description'].value
  let arrayObj = [] 
  let getItem = localStorage.getItem('records')
  let listObj = {
    date,
    category,
    amount,
    description
  }
  arrayObj.push(listObj)
  // console.log(listObj)
  // localStorage.removeItem('records')
  if (!getItem){
    localStorage.setItem('records',JSON.stringify(arrayObj))
  }else{
    let exists = localStorage.getItem('records')
    let existsArray = JSON.parse(exists)
    console.log(existsArray)
    console.log(listObj)
    existsArray.push(listObj)
    console.log(existsArray)
    localStorage.setItem('records',JSON.stringify(existsArray))
  }
  
  // else{
  //   newArray =  JSON.parse(getItem).push(listObj)
  //   localStorage.setItem('records',JSON.stringify(newArray))
  // }

})
})
