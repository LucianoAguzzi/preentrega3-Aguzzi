// En este js se encuentra la grilla de productos

const mainTitle = document.querySelector("#tituloprincipal")
const mainContainter = document.querySelector(".container")
const elementWindow = document.createElement("div")
elementWindow.className = "window"
elementWindow.textContent = "disc"
mainContainter.appendChild(elementWindow)

function windowsToHtml(lista) {
    const secondContainer = document.querySelector(".container")
    for (let i = 0; i < lista.length; i++) {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
        <div class= "container-img">
        <img src= ${lista[i].img} alt=${lista[i].name}>
        <h2>
        ${lista[i].name}
    </h2>
    <button>
    comprar
    </button>
        </div> 
        `
        secondContainer.appendChild(card)
    }
}

windowsToHtml(lista)