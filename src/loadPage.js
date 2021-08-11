
import {home} from "./home"
import {contacts} from "./contacts"
import {nav} from "./menu"

function loadPage(){
    let content = document.getElementById("content");
    // top
    let topBar = document.createElement("div")
    topBar.classList.add("top-bar")
    content.appendChild(topBar)

    let containerTop = document.createElement("div")
    containerTop.classList.add("containerTop")

    topBar.appendChild(containerTop)

    let top = document.createElement("div")
    top.classList.add("top")
    containerTop.appendChild(top)

    let logo = document.createElement("div")
    logo.classList.add("logo")
    logo.innerHTML = "Best Choice"
    top.appendChild(logo)

    
    //menu
    let menu = document.createElement("menu")
    menu.classList.add("menu")


    let li = document.createElement("li")
    menu.appendChild(li)
    let a = document.createElement("a")
    a.textContent = "Home"
    a.classList.add("btn")
    a.classList.add("active")
    
    li.appendChild(a) 

  
    li = document.createElement("li")
    menu.appendChild(li)
    a = document.createElement("a")
    a.setAttribute("id","menu")
    a.textContent = "Menu"
    a.classList.add("btn")
    
    li.appendChild(a) 

    li = document.createElement("li")
    menu.appendChild(li)
    a = document.createElement("a")
    a.textContent = "Contact"
    a.setAttribute("id","contact")
    a.classList.add("btn")
    li.appendChild(a) 
    
    top.appendChild(menu)

    //center page

    let main = document.createElement("div")
    main.classList.add("main")
    content.appendChild(main)
    let containerMain = document.createElement("div")
    containerMain.classList.add("containerMain")
    main.appendChild(containerMain)
    home(containerMain,"home")
    nav(containerMain, "food")
    contacts(containerMain,"contact")
    
    //nav(main);

    //footer
    let footer = document.createElement("div")
    footer.classList.add("footer")
    content.appendChild(footer)
    
    let containerFooter = document.createElement("div")
    containerFooter.classList.add("containerFooter")
    containerFooter.innerHTML = `Copyright © 2021 <a href="https://github.com/Jess2D"> [ jess2d 🦄 ]</a>`
    footer.appendChild(containerFooter)

}



function openPage(evt, page) {
    let i, pageContent, pagelinks;

    pageContent = document.getElementsByClassName('main')
    for (i = 0; i < pageContent.length; i++) {
        pageContent[i].style.display = "none";
      }

    pagelinks = document.getElementsByClassName("btn");
      for (i = 0; i < pagelinks.length; i++) {
        pagelinks[i].className = pagelinks[i].className.replace(" active", "");
      }

    //document.getElementById(page).style.display = "block";
    //evt.currentTarget.className += " active";
}


export {loadPage} ;