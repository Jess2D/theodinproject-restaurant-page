


function loadPage(){
    let content = document.getElementById("content");
    let topBar = document.createElement("div")
    topBar.classList.add("topBar")
    content.appendChild(topBar)

    let container = document.createElement("div")
    container.classList.add("container")
    topBar.appendChild(container)


    console.log("entrou lindo!")

}

function container(){
    let container = document.createElement("div")
    container.setAttribute("class", "container")
}


function footer(){

}

export {loadPage} ;