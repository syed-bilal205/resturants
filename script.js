const heroSection = document.querySelector(".topNavbar")

const footerElem=document.querySelector(".our-footer")

const scrollElement = document.createElement("div")
scrollElement.classList.add("gototop")

scrollElement.innerHTML =`<i class="fas fa-arrow-up" class="scroll-top"></i>`

footerElem.after(scrollElement)

const scrollToTop =() =>{
    heroSection.scrollIntoView({behavior:"smooth"})
}

scrollElement.addEventListener("click",scrollToTop)