const tab1 = document.querySelector('.functional__filter_tab-1');
const tab2 = document.querySelector('.functional__filter_tab-2');

tab1.onclick = function (){
  tab1.classList.add('functional__filter_tab-active');
  tab2.classList.remove('functional__filter_tab-active');
}

tab2.onclick = function (){
  tab2.classList.add('functional__filter_tab-active');
  tab1.classList.remove('functional__filter_tab-active');
}

const choseOne = document.querySelector('#chosen-1');
const choseTwo = document.querySelector('#chosen-2');
const choseThree = document.querySelector('#chosen-3');
const choseFour = document.querySelector('#chosen-4');
const compareOne = document.querySelector('#compare-1');
const compareTwo = document.querySelector('#compare-2');
const compareThree = document.querySelector('#compare-3');
const compareFour = document.querySelector('#compare-4');
const chosen = document.querySelector('.callback__selected-popup');
const compared = document.querySelector('.callback__compare-popup');

let q = 0;
let w = 0;
let e = 0;
let r = 0;
let k = 0;
let n = 0;
let j = 0;
let m = 0;

function isChosenVisible(){
  if(+chosen.innerHTML > 0){
    chosen.style.display = 'block';
  }
  else if(+chosen.innerHTML === 0){
    chosen.style.display = 'none';
  }
}

function isComparedVisible(){
  if(+compared.innerHTML > 0){
    compared.style.display = 'block';
  }
  else if(+compared.innerHTML === 0){
    compared.style.display = 'none';
  }
}

choseOne.onclick = function(){
  k++;
  if(k % 2 > 0){
    chosen.innerText = +chosen.innerHTML + 1;
    choseOne.innerText = 'В избранном';
  }
  else{
    chosen.innerText = +chosen.innerHTML - 1;
    choseOne.innerText = 'В избранное';
  }
  isChosenVisible();  
}

choseTwo.onclick = function(){
  n++;
  if(n % 2 > 0){
    chosen.innerText = +chosen.innerHTML + 1;
    choseTwo.innerText = 'В избранном';
  }
  else{
    chosen.innerText = +chosen.innerHTML - 1;
    choseTwo.innerText = 'В избранное';
  }
  isChosenVisible();
}

choseThree.onclick = function(){
  j++;
  if(j % 2 > 0){
    chosen.innerText = +chosen.innerHTML + 1;
    choseThree.innerText = 'В избранном';
  }
  else{
    chosen.innerText = +chosen.innerHTML - 1;
    choseThree.innerText = 'В избранное';
  }
  isChosenVisible();
}

choseFour.onclick = function(){
  m++;
  if(m % 2 > 0){
    chosen.innerText = +chosen.innerHTML + 1;
    choseFour.innerText = 'В избранном';
  }
  else{
    chosen.innerText = +chosen.innerHTML - 1;
    choseFour.innerText = 'В избранное';
  }
  isChosenVisible();
}

compareOne.onclick = function(){
  q++;
  if(q % 2 > 0){
    compared.innerText = +compared.innerHTML + 1;
    compareOne.innerText = 'В сравнении';
  }
  else{
    compared.innerText = +compared.innerHTML - 1;
    compareOne.innerText = 'Сравнить товар';
  }
  isComparedVisible();
}

compareTwo.onclick = function(){
  w++;
  if(w % 2 > 0){
    compared.innerText = +compared.innerHTML + 1;
    compareTwo.innerText = 'В сравнении';
  }
  else{
    compared.innerText = +compared.innerHTML - 1;
    compareTwo.innerText = 'Сравнить товар';
  }
  isComparedVisible();
}

compareThree.onclick = function(){
  e++;
  if(e % 2 > 0){
    compared.innerText = +compared.innerHTML + 1;
    compareThree.innerText = 'В сравнении';
  }
  else{
    compared.innerText = +compared.innerHTML - 1;
    compareThree.innerText = 'Сравнить товар';
  }
  isComparedVisible();
}

compareFour.onclick = function(){
  r++;
  if(r % 2 > 0){
    compared.innerText = +compared.innerHTML + 1;
    compareFour.innerText = 'В сравнении';
  }
  else{
    compared.innerText = +compared.innerHTML - 1;
    compareFour.innerText = 'Сравнить товар';
  }
  isComparedVisible();
}