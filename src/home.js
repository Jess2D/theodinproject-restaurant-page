function home(main) {

    let containerMain = document.createElement("div")
    containerMain.classList.add("containerMain")
    main.appendChild(containerMain)


    let wrap = document.createElement("div")
    wrap.classList.add("wrap")
    containerMain.appendChild(wrap)

    let ourHistory = document.createElement("div")
    ourHistory.classList.add("our-history")
    wrap.appendChild(ourHistory)

    let p = document.createElement("p")
    p.innerText = "We imagine a world where there’s no such thing as a Health Food taste bad and all farmers live prosperously."
    ourHistory.appendChild(p)

    let button = document.createElement("button")
    button.classList.add("butt")
    button.innerHTML = "Learn More"
    ourHistory.appendChild(button)

    let imageHome = document.createElement("div")
    imageHome.classList.add("image-home")

    let img = document.createElement("img")
    img.src = "../img/health.PNG"

    imageHome.appendChild(img)
    wrap.appendChild(imageHome)



}

export{home}