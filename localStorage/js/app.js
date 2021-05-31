let ar = [];

function User(name, password) {
  this.name = name;
  this.password = password;

  ar.push(this);
}

function setArrayInlS() {
  localStorage.setItem("orders", JSON.stringify(ar));
}

function getDataFromLS() {
  let data = JSON.parse(localStorage.getItem("orders"));
  console.log(data);
  if(data!==null){
      ar=data
  }
  render()
}

function handleFunction(event) {
  event.preventDefault();

  let name = event.target.userName.value;
  let pass = event.target.password.value;
  new User(name, pass);
  setArrayInlS();
  render();
}

function render() {
  let orders = document.getElementById("orders");
  orders.textContent = "";
  for (let i = 0; i < ar.length; i++) {
    let liElEment = document.createElement("li");
    orders.appendChild(liElEment);
    liElEment.textContent = `name is: ${ar[i].name} and pasword is  ${ar[i].password} `;
  }
}
getDataFromLS();

document.getElementById("myForm").addEventListener("submit", handleFunction);
