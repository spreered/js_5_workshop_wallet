const searchForm = document.querySelector('#search-form')
searchForm.addEventListener('submit',function(e){
  let all = localStorage.getItem('records')
  let allArray = JSON.parse(all)
  e.preventDefault();
  let searchCate = searchForm.elements['category'].value
  let searchMonth = searchForm.elements['month'].value
  console.log(searchCate,searchMonth)

  let filterArray = allArray.filter(obj => !searchCate || obj.category == searchCate)
                            .filter(obj => !searchMonth || obj.date.match(new RegExp(`^${searchMonth}`)));

  // console.log(filterArray)
  panel.innerHTML=''
  filterArray.forEach(obj => {
    temp.content.querySelector('th').textContent = obj.date
    temp.content.querySelector('.category').textContent =obj.category
    temp.content.querySelector('.description').textContent =obj.description
    temp.content.querySelector('.amount').textContent =obj.amount
    temp.content.querySelector('.remove').setAttribute('Data-id',obj.uuid)
    let clone = document.importNode(temp.content,true)
    panel.appendChild(clone)
  });
})