function nav(containerMain, id) {
    containerMain.setAttribute("id",id)

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
      "src" : "../img/chiken-salad.jpg",
      "alt": "Chicken Salad", 
      "h2": "Chicken Salad"},

      {"class":"food-photo", 
      "src" : "../img/fetta-salad.jpg",
      "alt": "Fetta Salad", 
      "h2": "Fetta Salad"}, 


      {"class":"food-photo", 
      "src" : "../img/somthie.jpg",
      "alt": "Smothie", 
      "h2": "Warrior Smothie"},

      {"class":"food-photo", 
      "src" : "../img/french-toast.jpg",
      "alt": "French Toast", 
      "h2": "French Toast"},

      {"class":"food-photo", 
      "src" : "../img/gluten-free-muffin.jpg",
      "alt": "Gluten Free Muffin", 
      "h2": "Gluten Free Muffin"},
      
      {"class":"food-photo", 
      "src" : "../img/leek-soup.jpg",
      "alt": "Leek and Potato Soup", 
      "h2": "Leek and Potato Soup"},

      {"class":"food-photo", 
      "src" : "../img/ojo-bife.jpg",
      "alt": "Scot File", 
      "h2": "Beef Socth"},

      {"class":"food-photo", 
      "src" : "../img/rump.jpg",
      "alt": "Beef Rump", 
      "h2": "Beef Rump"},


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