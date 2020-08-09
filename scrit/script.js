const openSidebar=document.querySelector('.btnSidebar')
const sidebar = document.querySelector('.sidebar');
const closeSideBar=document.querySelector('.closeMenu')

openSidebar.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopPropagation();
   sidebar.classList.add('sidebar_open')
  
})

closeSideBar.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopPropagation();
    sidebar.classList.remove('sidebar_open');
});
