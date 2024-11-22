function toggleBtn(x){
    x.classList.toggle("change")
    
}

const navToggle = document.querySelector('.toggle-icons')

const links = document.querySelector('.links')

navToggle.addEventListener("click",()=>{
    links.classList.toggle('showlink')
})