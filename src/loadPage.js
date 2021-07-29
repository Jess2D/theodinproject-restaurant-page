


function loadPage(){
    let content = document.getElementById("content");
    let topBar = document.createElement("div")
    topBar.classList.add("topBar")
    content.appendChild(topBar)
    console.log("entrounp")

}

function container(){
    let container = document.createElement("div")
    container.setAttribute("class", "container")
}


function footer(){

}

export {loadPage} ;