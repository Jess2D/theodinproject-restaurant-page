import {loadPage} from "./loadPage"
import {nav} from "./menu"
function home(containerMain, id) {
    let wrap = document.createElement("div")
    wrap.classList.add("wrap")
    containerMain.appendChild(wrap)
    wrap.setAttribute("id",id)
    wrap.style.display = "block";

    let homeContainer = document.createElement("div")
    homeContainer.classList.add("homeContainer")
    wrap.appendChild(homeContainer)

    let ourHistory = document.createElement("div")
    ourHistory.classList.add("our-history")
    homeContainer.appendChild(ourHistory)

    let p = document.createElement("p")
    p.innerText = "We imagine a world where there’s no such thing as a Health Food taste bad and all farmers live prosperously."
    ourHistory.appendChild(p)

    let imageHome = document.createElement("div")
    imageHome.classList.add("image-home")

    let img = document.createElement("img")
    img.src = "../img/health.PNG"

    imageHome.appendChild(img)
    homeContainer.appendChild(imageHome)

}

export{home}