
import {home} from "./home"
import {contacts} from "./contacts"

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

    let menu = document.createElement("menu")
    menu.classList.add("menu")
    let li = document.createElement("li")
    li.textContent = "Home"
    menu.appendChild(li)
    li = document.createElement("li")
    li.textContent = "Menu"
    menu.appendChild(li)
    li = document.createElement("li")
    li.textContent = "Contact"
    menu.appendChild(li)
    top.appendChild(menu)

    //center page

    let main = document.createElement("div")
    main.classList.add("main")
    content.appendChild(main)
    contacts(main);

    //footer
    let footer = document.createElement("div")
    footer.classList.add("footer")
    content.appendChild(footer)
    
    let containerFooter = document.createElement("div")
    containerFooter.classList.add("containerFooter")
    containerFooter.innerHTML = `Copyright © 2021 <a href="https://github.com/Jess2D"> [ jess2d 🦄 ]</a>`
    footer.appendChild(containerFooter)

}



export {loadPage} ;