let mark=document.querySelectorAll('.mark');
let pressed=document.createElement('div');
pressed.innerHTML="<div></div>";
pressed.classList.add("press");
let old;
let final;
let msg;
let msg1=mark.forEach( (div)=>{
    div.addEventListener( 'click',(e)=>{
        old=pressed;
         pressed=e.target;
        pressed.classList.add("press");
        old.classList.remove("press");
        final=pressed.getAttribute('id');
        msg=`You Selected ${final} out of 5.`;
       let submit=document.querySelector(".submit");


       submit.addEventListener('click',()=>{
        let print=document.querySelector(".msg_p");
        print.innerText=`You selected ${final} out of 5.`;
        let container=document.querySelector(".container");
        let feedback=document.querySelector(".feedback");
        container.classList.add("hidden");
        feedback.classList.remove("hidden");
       })
    });
});


