// Éste es el js del darkmode y del login
const modeButton = document.querySelector("#darklight")
const body = document.querySelector(".light-mode")
modeButton.onclick = () => {
    body.classList.toggle("dark-mode")
}
const formLogin = document.querySelector("#login")
const inputUser = document.querySelector("#input-user")
const inputPass = document.querySelector("#input-pass")
const incorrectLogin = document.querySelector("#loginit")
const formsContainer = document.querySelector(".container-login")
const logout = document.querySelector("#logout")
const userData = {
    user: "lucho",
    pass: "luca123",
}
const uploadToLs = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}
const getFromLs = (clave) => {
    return JSON.parse(localStorage.getItem(clave))
}

formLogin.onsubmit = (event) => {
    event.preventDefault()
    if (inputUser.value === userData.user && inputPass.value === userData.pass) {
        uploadToLs("login", true)
        formsContainer.style.display = "none"
    } else {
        incorrectLogin.style.display = "block"
    }
}
function loginValue(clave) {
    if (clave !== true) {
        formsContainer.style.display = "flex"
    } else {
        formsContainer.style.display = "none"
        logout.style.display = "block"
    }
}

loginValue(getFromLs("login"))