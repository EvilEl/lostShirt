(function (){
    //elements sidebar  Close and Open
const openingBtn = document.querySelector('.sidebar__hamburger')
const closingBtn = document.querySelector('.sidebar__close')
const sideBar = document.querySelector('.sidebar')


// function open and close sidebar
const openSidebar = () =>{
    sideBar.classList.add('sidebar--opened')
}

openingBtn.addEventListener('click',openSidebar)

const closingSidebar = ()=>{
    sideBar.classList.remove('sidebar--opened')
}

closingBtn.addEventListener('click',closingSidebar)
} ())