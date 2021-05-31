let arrayList = [];

function List(name, age, imgL, mager) {
  this.name = name;
  this.imgL = imgL;
  this.age = age;
  this.imgL = "img/" + imgL;
  this.mager = mager;
  arrayList.push(this);
}

let p1 = new List("Qasem", 28, "1010.png", "LS");
let p2 = new List("Qasem", 28, "1010.png", "LS");
let p3 = new List("Qasem", 28, "1010.png", "LS");
let p4 = new List("Qasem", 28, "1010.png", "LS");
let p5 = new List("Qasem", 28, "1010.png", "LS");
let p6 = new List("Qasem", 28, "1010.png", "LS");
let p7 = new List("Qasem", 28, "1010.png", "LS");
let p8 = new List("Qasem", 28, "1010.png", "LS");
let p9 = new List("Qasem", 28, "1010.png", "LS");
// console.log(Math.floor(Math.random() * 10));
console.log(arrayList);

let data = JSON.stringify(arrayList);
console.log(data);
localStorage.setItem("data", data);

let get_data = localStorage.getItem("data");

let all_data = JSON.parse(get_data);

console.log(all_data);

let dEl = document.getElementById("list");
let count = 0;


function rnderD() {
  for (let i = 0; i < all_data.length; i++) {
    let pEl = document.createElement("p");
    pEl.id = "my";
    let spanEl = document.createElement("span");
    spanEl.id = "myage";

    let imgEL = document.createElement("img");
    imgEL.id = "myImg";
    imgEL.setAttribute("onClick", `removeItem(${count})`);
    // imgEL.setAttribute('dataLS',all_data[List.i])
    let magerEl = document.createElement("span");
    magerEl.id = "mymager";

    dEl.appendChild(pEl);
    dEl.appendChild(spanEl);
    dEl.appendChild(imgEL);
    dEl.appendChild(magerEl);

    imgEL.setAttribute("src", all_data[i].imgL);
    pEl.textContent = all_data[i].name;
    spanEl.textContent = all_data[i].age;
    magerEl.textContent = all_data[i].mager;
    count++;
  }
}
rnderD();

// let imgSet=document.getElementById('myImg');

// imgSet.addEventListener('click', removeItem )
function removeItem(elemt) {
  let loacl = [];
  for (let i = 0; i < all_data.length; i++) {
    if (i != elemt) {
      loacl.push(all_data[i]);
    }
  }
  all_data = loacl;
   data = JSON.stringify(all_data);
  console.log(data);
  localStorage.setItem("data", data);

  get_data = localStorage.getItem("data");

  all_data = JSON.parse(get_data);

  console.log(all_data);
}
