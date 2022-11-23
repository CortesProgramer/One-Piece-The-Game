


function iniciarJuego() {
    let botonPirata = document.getElementById("boton-pirata")
    botonPirata.addEventListener("click", seleccionarPirataJugador)
}

function seleccionarPirataJugador() {
    let pirataLuffy = document.getElementById("Monkey D. Luffy 👒".checked)
    let pirataShanks = document.getElementById("Akagami No Shanks ⚔".checked)
    let pirataAce = document.getElementById("Portgas D. Ace".checked)

        if(pirataLuffy == true) {
            alert("Seleccionaste a Mugiwara No Luffy")
        } else if(pirataShanks == true) {
            alert("Seleccionaste a Akagami No Shanks")
        } else(pirataAce == true) {
            alert("Seleccionaste a Hiken No Ace")
        }

}

    
window.addEventListener("load", iniciarJuego)