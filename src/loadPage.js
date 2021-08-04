
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
    a.textContent = "Menu"
    a.classList.add("btn")
    li.appendChild(a) 

    li = document.createElement("li")
    menu.appendChild(li)
    a = document.createElement("a")
    a.textContent = "Contact"
    a.classList.add("btn")
    li.appendChild(a) 


    top.appendChild(menu)

    //center page

    let main = document.createElement("div")
    main.classList.add("main")
    content.appendChild(main)

    home(main);
    a.addEventListener("click", (e) => {
        home(main);
        main.classList.remove("main")
      });
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



export {loadPage} ;