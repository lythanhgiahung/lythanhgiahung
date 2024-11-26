let ID=['Sort','Bs','TwoPointer','BitO','Stack','Ps','Da','Recursion','MITM'];
let f=document.querySelectorAll('.containner ul li');

f.forEach((li,key) => {
    li.addEventListener('click',function(){
        location.href=ID[key]+".html";
    })
});