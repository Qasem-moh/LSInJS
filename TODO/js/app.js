"use strict";

let FullArray = [];
function Photo(Pimg, title, price, range) {
  this.Pimg = "img/" + Pimg;
  this.title = title;
  this.price = price + "$";
  this.range = range;
  FullArray.push(this);
}
let p1 = new Photo("download.png", "Hello", 150, 4);
let p2 = new Photo("download.png", "Hello", 150, 4);
let p3 = new Photo("download.png", "Hello", 150, 4);
let p4 = new Photo("download.png", "Hello", 150, 4);
let p5 = new Photo("download.png", "Hello", 150, 4);
let p6 = new Photo("download.png", "Hello", 150, 4);
let p7 = new Photo("download.png", "Hello", 150, 4);
let p8 = new Photo("download.png", "Hello", 150, 4);
let p9 = new Photo("download.png", "Hello", 150, 4);
let p10 = new Photo("download.png", "Hello", 150, 4);
let p11 = new Photo("download.png", "Hello", 150, 4);
let p12 = new Photo("download.png", "Hello", 150, 4);
let p13 = new Photo("download.png", "Hello", 150, 4);
let p14 = new Photo("download.png", "Hello", 150, 4);
let p15 = new Photo("download.png", "Hello", 150, 4);
console.log(FullArray);

function render() {
  let sectionRender = document.getElementById("Sec");
  for (let i = 0; i < FullArray.length; i++) {
    let imgR = document.createElement("img");
    sectionRender.appendChild(imgR);
    imgR.setAttribute("src", FullArray[i].Pimg);
    imgR.setAttribute("id", "imgr");
    imgR.setAttribute("class", "imgr");
    let titleR = document.createElement("span");
    sectionRender.appendChild(titleR);
    titleR.textContent=FullArray[i].title
    let titleR2 = document.createElement("span");
    sectionRender.appendChild(titleR2);
    titleR2.textContent=FullArray[i].price;
    let titleR3 = document.createElement("span");
    sectionRender.appendChild(titleR3);
    titleR3.textContent=FullArray[i].range;
    
  }
}
render();



let dg=document.getElementById('imgr')
dg.addEventListener('click',function(e){
  let df=e.target
})




// let stringifyArrayLS = JSON.stringify(FullArray);
// console.log(stringifyArrayLS);

// localStorage.setItem('ae',stringifyArrayLS)

// let rLS=localStorage.getItem('ae')
// let parsArrayLS = JSON.parse(rLS);
// console.log(parsArrayLS);
