let menu = document.getElementById('menu');
let menu2 = document.getElementById('menu2');
let menuDrop = document.getElementById('menudrop');

menu2.addEventListener('click', function(){
    menuDrop.style.display='block';
    menuDrop.style.transform='translateX(0)';
    menu2.style.display='none';
    menu.style.display='block';
    menuDrop.style.transition='all 0.4s';

})

menu.addEventListener('click', function(){
    menuDrop.style.display='';
    menuDrop.style.transform='translateX(100%)';
    menu2.style.display='block';
    menu.style.display='none';
    menuDrop.style.transition='all 0.4s';
})
