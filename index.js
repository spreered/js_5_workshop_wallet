window.addEventListener('DOMContentLoaded',function(){
  let form = window.document.forms['item-form']

  const panel = document.querySelector('#records-panel')
  let now = localStorage.getItem('records')
  let unsortArray = JSON.parse(now)
  let nowArray = unsortArray.sort((a,b)=>{
     a = a.date.split('-')  
    b = b.date.split('-')
    a = Number(a[0]+a[1]+a[2])
    b = Number(b[0]+b[1]+b[2])
    return b - a
  })

  const temp = document.querySelector('#temp')
  
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
    localStorage.setItem('redcords',JSON.stringify(arrayObj))
  }else{
    let exists = localStorage.getItem('records')
    let existsArray = JSON.parse(exists)
    existsArray.push(listObj)
    localStorage.setItem('records',JSON.stringify(existsArray))
  }

    temp.content.querySelector('th').textContent = listObj.date
    temp.content.querySelector('.category').textContent = listObj.category
    temp.content.querySelector('.description').textContent = listObj.description
    temp.content.querySelector('.amount').textContent =listObj.amount
    let clone = document.importNode(temp.content,true)
    panel.appendChild(clone)
  

})
  nowArray.forEach(obj => {
    temp.content.querySelector('th').textContent = obj.date
    temp.content.querySelector('.category').textContent =obj.category
    temp.content.querySelector('.description').textContent =obj.description
    temp.content.querySelector('.amount').textContent =obj.amount
    let clone = document.importNode(temp.content,true)
    panel.appendChild(clone)
  });
  

})
