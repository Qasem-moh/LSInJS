"user strict";
// define array to set all objects in array on create
let userArray = [];

let headerName = ["name", "max number", "min Number", "telephone", "pass"];
// build constuctor function
function User(username, max, min, tel, pass) {
  this.username = username;
  this.max = max;
  this.min = min;
  this.tel = tel;
  this.pass = pass;
  // push constructor to array
  userArray.push(this);
}

// set datain localstorage
function setDataInLS() {
  localStorage.setItem("orderList", JSON.stringify(userArray));
}

//get data from localstorage
function getDataFromLS() {
  let dataLS = JSON.parse(localStorage.getItem("orderList"));
  console.log(dataLS);
  let newObj;
  if (dataLS != null) {
    for (let i = 0; i < dataLS.length; i++) {
      newObj = new User(
        dataLS[i].username,
        dataLS[i].max,
        dataLS[i].min,
        dataLS[i].tel,
        dataLS[i].pass
      );
    }
    newObj.render();
  }
}

//get data from user form
document.getElementById("formOrders").addEventListener("submit", (e) => {
  e.preventDefault();
  let event = e.target;
  let username = event.userName.value;
  let max = event.maxNumberUser.value;
  let min = event.minNumberUser.value;
  let tel = event.telNumberUser.value;
  let pass = event.passNumberUser.value;
  let newobjectUser = new User(username, max, min, tel, pass);
  console.log(newobjectUser);
  setDataInLS();
  newobjectUser.render();
});

let orders = document.getElementById("container");
let tableEl = document.createElement("table");
orders.append(tableEl);
let trHeader = document.createElement("tr");
tableEl.appendChild(trHeader);
for (let i = 0; i < headerName.length; i++) {
  let thElements = document.createElement("th");
  trHeader.appendChild(thElements);
  thElements.textContent = headerName[i];
}
//create render function is a protptype constructor
let tb=document.createElement('tbody');
User.prototype.render = () => {
  for (let index = 0; index < userArray.length; index++) {
    let trElement = document.createElement("tr");
    tableEl.append(trElement);
    trElement.textContent=' '
    for (let i = 0; i < userArray.length; i++) {
      let tdElement = document.createElement("td");
      trElement.appendChild(tdElement);
      tdElement.textContent = userArray[i].username;

      let tdElement2 = document.createElement("td");
      trElement.appendChild(tdElement2);
      tdElement2.textContent = userArray[i].max;

      let tdElement3 = document.createElement("td");
      trElement.appendChild(tdElement3);
      tdElement3.textContent = userArray[i].min;

      let tdElement4 = document.createElement("td");
      trElement.appendChild(tdElement4);
      tdElement4.textContent = userArray[i].tel;

      let tdElement5 = document.createElement("td");
      trElement.appendChild(tdElement5);
      tdElement5.textContent = userArray[i].pass 
      
      "<br/>";
    }
  }
};

// call function
getDataFromLS();
