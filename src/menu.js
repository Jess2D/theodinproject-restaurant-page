function nav(main) {
    let containerMain = document.createElement("div")
    containerMain.classList.add("containerMain")
    main.appendChild(containerMain)

    let wrap = document.createElement("div")
    wrap.classList.add("wrap")
    containerMain.appendChild(wrap)

    let grid = document.createElement("div")
    grid.classList.add("grid")
    wrap.appendChild(grid)

  

    
}



export {nav}