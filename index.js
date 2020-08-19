window.addEventListener("DOMContentLoaded", () => {
  const itemForm = window.document.forms["item-form"]
  let records = []

  item_form_listener()

  function item_form_listener() {
    itemForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      //判斷local storage 是否為null
      if(get_records()){
        records = get_records()
      } 
      //records 陣列加入新紀錄
      records.push(new_record())
      save_records(records)

      console.log(records)
      itemForm.reset()
    })
  }
  
  function new_record() {
    let newrecord = {
      category: itemForm.elements.category.value,
      date: itemForm.elements.date.value,
      amount: itemForm.elements.amount.value,
      description: itemForm.elements.description.value,
    }
    // console.log(record)
    return newrecord
  }

  //records存入localStorage
  function save_records(records) {
    let json_records = JSON.stringify(records)
    localStorage.setItem('records', json_records)
  }

  //取得localStorage records
  function get_records() {
    let json_records = localStorage.getItem('records')
    return JSON.parse(json_records)
  }
})