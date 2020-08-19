
  let form = window.document.forms['item-form']
  const panel = document.querySelector('#records-panel')
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
    uuid:generateUUID(),
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
    temp.content.querySelector('th').textContent = listObj.date
    temp.content.querySelector('.category').textContent = listObj.category
    temp.content.querySelector('.description').textContent = listObj.description
    temp.content.querySelector('.amount').textContent =listObj.amount
    temp.content.querySelector('.remove').setAttribute('Data-id',listObj.uuid)
    let clone = document.importNode(temp.content,true)
    panel.appendChild(clone)
  }else{
    let exists = localStorage.getItem('records')
    let existsArray = JSON.parse(exists)
    existsArray.push(listObj)
    localStorage.setItem('records',JSON.stringify(existsArray))
    
    temp.content.querySelector('th').textContent = listObj.date
    temp.content.querySelector('.category').textContent = listObj.category
    temp.content.querySelector('.description').textContent = listObj.description
    temp.content.querySelector('.amount').textContent =listObj.amount
    temp.content.querySelector('.remove').setAttribute('Data-id',listObj.uuid)
    let clone = document.importNode(temp.content,true)
    panel.appendChild(clone)
  }

  
})
  if(localStorage.getItem('records')){
    let now = localStorage.getItem('records')
    let unsortArray = JSON.parse(now)
    let nowArray = unsortArray.sort((a,b)=>{
    a = a.date.split('-')  
    b = b.date.split('-')
    a = Number(a[0]+a[1]+a[2])
    b = Number(b[0]+b[1]+b[2])
    return b - a
   })

  nowArray.forEach(obj => {
    temp.content.querySelector('th').textContent = obj.date
    temp.content.querySelector('.category').textContent =obj.category
    temp.content.querySelector('.description').textContent =obj.description
    temp.content.querySelector('.amount').textContent =obj.amount
    temp.content.querySelector('.remove').setAttribute('Data-id',obj.uuid)
    let clone = document.importNode(temp.content,true)
    panel.appendChild(clone)
  });
  }
  panel.addEventListener('click',function(e){
    let current = localStorage.getItem('records')
    let currentArray = JSON.parse(current)
    if(e.target.classList != "remove"){
      return
    }
    let id = e.target.dataset.id
    // console.log(nowArray)
    let remainArray = currentArray.filter(obj=> obj.uuid !== id)
    // nowArray.find(obj => obj.uuid == id)
    e.target.parentNode.parentNode.remove()
    localStorage.setItem('records',JSON.stringify(remainArray))
  })
  











  function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d+ Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
  };


