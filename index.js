window.addEventListener("DOMContentLoaded", function () {

  function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  };

  document.querySelector('#item-form button').addEventListener('click', function (event) {
    event.preventDefault();

    let iform = document.forms['item-form'];
    let fdate = iform.elements.date.value;
    let famount = iform.elements.amount.value;
    let fdesc = iform.elements.description.value;
    let uuid = generateUUID();

    let record = JSON.stringify({ uuid: uuid, date: fdate, amount: famount, description: fdesc })

    console.log(record);
    iform.reset();


  })
})