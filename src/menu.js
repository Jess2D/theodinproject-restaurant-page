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

  let elements = [
      {"class":"food-photo", 
      "src" : "../img/chia.jpg",
      "alt": "Chia", 
      "h2": "Chia Pudding"}, 

      {"class":"food-photo", 
      "src" : "../img/fetta-salad.jpg",
      "alt": "Fetta Salad", 
      "h2": "Fetta Salad"}, 


      {"class":"food-photo", 
      "src" : "../img/chiken-salad.jpg",
      "alt": "Chicken Salad", 
      "h2": "Chicken Salad"}

  ]

  elements.map(elemnt => {
      let card = document.createElement("div")
      card.classList.add("card")
      grid.appendChild(card)

      let image = document.createElement("img")
      image.setAttribute("src", elemnt.src)
      image.setAttribute("alt", elemnt.alt)
      image.classList.add(elemnt.class)
      card.appendChild(image)

      let h2 = document.createElement("h2")
      h2.innerText = elemnt.h2
      card.appendChild(h2)
      grid.appendChild(card)
      
  })

    
}



export {nav}