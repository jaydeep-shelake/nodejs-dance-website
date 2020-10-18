const btn = document.getElementById('btn');
const username=document.getElementById('name')
const email=document.getElementById('email')
const number=document.getElementById('number')
const msg = document.querySelector('.msg');
const para = document.getElementById('para') 
const redmsg = document.querySelector('.redmsg');
btn.addEventListener('click',(e)=>{
    
    if(!username.value || !email|| !number){  
      redmsg.classList.add('show');
      
    }
    else{
        msg.classList.add('show');
        console.log(name.value);
    }
    
  });
