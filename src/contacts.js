function contacts(main) {
    
    let containerMain = document.createElement("div")
    containerMain.classList.add("containerMain")
    main.appendChild(containerMain)

    let wrap = document.createElement("div")
    wrap.classList.add("wrap")
    containerMain.appendChild(wrap)

    let menu = document.createElement("menu")
    menu.classList.add("contact")
    wrap.appendChild(menu)

    let li = document.createElement("li")
    menu.appendChild(li)
    let img = document.createElement("img")
    img.setAttribute("src", "../img/contact.jpg")
    img.setAttribute("alt","Restaurant Contact")
    li.appendChild(img)

    menu.appendChild(li)

    li = document.createElement("li")
    li.innerText = " Phone:(+21#) 1234 - 5678"
    menu.appendChild(li)


    li = document.createElement("li")
    li.innerText = "Adress: Rua Street, 1. Bairro, Jupiter"
    menu.appendChild(li)


    li = document.createElement("li")
    li.innerText = "Tuesday-Sunday:  12pm - 9pm"
    menu.appendChild(li)

    



    
}


export {contacts}