// function toggleMenu(){
//     const toggleMenu=document.querySelector('.toggleMenu');
//     const navigation=document.querySelector('.navigation');
//     toggleMenu.classList.toggle('active')
//     navigation.classList.toggle('active')
// }

const toggleBtn = document.getElementsByClassName("toggleMenu")[0];
const navBar = document.getElementsByClassName("navigation")[0];

toggleBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
});