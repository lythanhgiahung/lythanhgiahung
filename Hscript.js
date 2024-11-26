let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let active = 0;
function Next(){
    active += 1;
    if (active > items.length - 1){
        active = 0;
    }
    reloadSlider();
}
function Prev(){
    active -= 1;
    if (active < 0){
        active = items.length;
    }
    reloadSlider();
}
function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';
    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}
dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})