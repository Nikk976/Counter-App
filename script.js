console.log("Hello Nikhil");
let para = document.getElementById('value');
para.innerHTML='0';
let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset');
var i = 0;
increase.addEventListener('click',()=>{
    i++;
    para.innerHTML = i;
});
decrease.addEventListener('click',()=>{
  i--;
  if(i >= 0) {
    para.innerHTML = i;
  }
});
reset.addEventListener('click',()=>{
     para.innerHTML = '0';
});