window.addEventListener("DOMContentLoaded", () => {
  const itemForm = window.document.forms["item-form"]
  const records_panel = window.document.querySelector("#records-panel")
  let records = []

  item_form_listener()
  get_records()
  show_records(records)

  function item_form_listener() {
    itemForm.addEventListener("submit", (e) => {
      e.preventDefault();

      //records 陣列加入新紀錄
      records.push(new_record())
      save_records(records)
      show_records(records)
      // console.log(records)
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
    //判斷local storage 是否為null
    if(json_records) {
      records = JSON.parse(json_records)
      return records
    }
  }


  function show_records(records) {
    console.log(records)
    //移除原本內容
    while (records_panel.hasChildNodes()) {
      console.log("aaaa")
      records_panel.removeChild(records_panel.childNodes[0]);
    }
    //排序records
    records = records.sort(compare)
    //畫面加入新 records
    records.forEach(function(record){
      show_record(record)
    })
  }

  function show_record(record) {
    let t = window.document.querySelector("#record-template")
    var clone = document.importNode(t.content, true);

    clone.querySelector(".category").textContent = record.category
    clone.querySelector(".date").textContent = record.date
    clone.querySelector(".amount").textContent = record.amount
    clone.querySelector(".description").textContent = record.description
    
    records_panel.appendChild(clone);
  }

  ///排序function
  function compare(a, b) {
    const date_a = a.date
    const date_b = b.date
  
    let comparison = 0;
    if (date_a < date_b) {
      comparison = 1;
    } else if (date_a > date_b) {
      comparison = -1;
    }
    return comparison;
  }
})