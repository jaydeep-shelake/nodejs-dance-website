const burger = document.querySelector('.burger');
const navBar = document.getElementById('navbar');

const btn = document.getElementById('btn')
burger.addEventListener('click',(e)=>{

    navBar.classList.toggle('hide');
   console.log('clicked');
});


