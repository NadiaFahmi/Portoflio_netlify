
const sideMenu = document.querySelector('#sideMenu');

const navBar = document.querySelector('nav');
const navLink = document.querySelector('nav ul');

function openMenu(){

  sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){

  sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll' , ()=>{

  if(scrollY >50){
    navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg' ,'shadow-sm', 'dark:bg-darkTheme','dark:shadow-white/20')
    navLink.classList.remove('bg-white', 'bg-opacity-50', 'shadow-sm','dark:border','dark:border-white/50','dark:bg-transparent')
  }else{
    navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg' ,'shadow-sm', 'dark:bg-darkTheme','dark:shadow-white/20')
    navLink.classList.add('bg-white', 'bg-opacity-50', 'shadow-sm','dark:boder' ,'dark:border-white/50','dark:bg-transparent')
  }
})
//-----------ligt mode & dark mode-----------

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}


function toggleTheme(){
  document.documentElement.classList.toggle('dark')

  if(document.documentElement.classList.contains('dark')){
    localStorage.theme ='dark';
  }else{
    localStorage.theme = 'light';
  }
}