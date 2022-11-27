let ataqueJugador 
let ataqueEnemigo
let ataqueAleatorio
let resultado




function aleatorio(min, max) {
    return Math.floor ( Math.random() * (max - min + 1) + min)
}


function iniciarJuego() {
    let botonPirata = document.getElementById("boton-pirata")
    botonPirata.addEventListener("click", seleccionarPirataJugador)

        let botonGolpe = document.getElementById("botonGolpe")
                botonGolpe.addEventListener("click", ataqueGolpe)
        let botonPatada = document.getElementById("botonPatada")
                botonPatada.addEventListener("click", ataquePatada)
        let botonCabezazo = document.getElementById("botonCabezazo")
                botonCabezazo.addEventListener("click", ataqueCabezazo)    
}   

function seleccionarPirataJugador() { 
    let spanPirataJugador = document.getElementById("pirataJugador")
     
    if (document.getElementById("Monkey D. Luffy").checked) {
        spanPirataJugador.innerHTML = "Luffy" 
        alert("Seleccionaste a Mugiwara No Luffy")
    } else if (document.getElementById("Akagami No Shanks").checked) {
        spanPirataJugador.innerHTML = "Shanks" 
        alert("Seleccionaste a Akagami No Shanks")
    } else if (document.getElementById("Portgas D. Ace").checked) {
        spanPirataJugador.innerHTML = "Ace" 
        alert("Seleccionaste a Hiken No Ace")
    } else{ 
        alert("Selecciona un personaje")
    }
    seleccionarPirataPc()
}

function seleccionarPirataPc() {
    let pirataAleatorio = aleatorio(1,3)
    let spanPirataPc = document.getElementById("pirataPc")
    
    if (pirataAleatorio == 1) {
        spanPirataPc.innerHTML = "Luffy"
    }
    else if (pirataAleatorio == 2) {
        spanPirataPc.innerHTML = "Shanks"
    }
    else if (pirataAleatorio == 3) { 
        spanPirataPc.innerHTML = "Ace"
    }
}

function ataqueGolpe() {
    ataqueJugador = "Golpe"
    ataqueAleatorioEnemigo()
    //alert(ataqueJugador)
}

function ataquePatada() {
    ataqueJugador = "Patada"
    ataqueAleatorioEnemigo()
    //alert(ataqueJugador)
}

function ataqueCabezazo() {
    ataqueJugador = "Cabezazo"
    ataqueAleatorioEnemigo()
    //alert(ataqueJugador)
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
        if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Golpe"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Patada"
    } else {
        ataqueEnemigo = "Cabezazo"
    }

    pelea()
}

function pelea() {
if(ataqueJugador == ataqueEnemigo) {
    resultado = "EMPATE ⚔"
} else if(ataqueJugador == "Golpe" && ataqueEnemigo == "Cabezazo") {
    resultado = "GANASTE ✔"
} else if(ataqueJugador == "Patada" && ataqueEnemigo == "Golpe") {
    resultado = "GANASTE ✔"
} else if(ataqueJugador == "Cabezazo" && ataqueEnemigo == "Patada") {
    resultado = "GANASTE ✔"
} else {
    resultado = "PERDISTE ❌"
}
    mensajes( )
}


function mensajes() {
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
        parrafo.innerHTML = "Has seleccionado " + ataqueJugador + " Tu enemigo Selecciono " + ataqueEnemigo + " " + resultado
        sectionMensajes.appendChild(parrafo)
}


window.addEventListener("load", iniciarJuego) 
