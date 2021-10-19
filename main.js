let menuButton = document.querySelector('.header__btn-menu');
let menu = document.querySelector('.header__nav');
let item1 = document.querySelector('#item1');
let item2 = document.querySelector('#item2');
let item3 = document.querySelector('#item3');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('header__btn-close')
  menu.classList.toggle('header__nav__visible')
})

btn1.addEventListener('click', () => {
  item1.classList.remove('skills__hidden');
  item2.classList.add('skills__hidden');
  item3.classList.add('skills__hidden');
  btn1.classList.add('active');
  btn2.classList.remove('active');
  btn3.classList.remove('active');
})

btn2.addEventListener('click', () => {
  item1.classList.add('skills__hidden');
  item2.classList.remove('skills__hidden');
  item3.classList.add('skills__hidden');
  btn1.classList.remove('active');
  btn2.classList.add('active');
  btn3.classList.remove('active');
})

btn3.addEventListener('click', () => {
  item1.classList.add('skills__hidden');
  item2.classList.add('skills__hidden');
  item3.classList.remove('skills__hidden');
  btn1.classList.remove('active');
  btn2.classList.remove('active');
  btn3.classList.add('active');
})