let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.oneclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
