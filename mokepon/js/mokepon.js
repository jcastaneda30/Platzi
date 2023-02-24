let ataqueJugador
let ataqueEnemigo
let vida_jugador = 3
let vida_enemigo = 3

function iniciarJuego(){
    //Se enconde la seccion de seleccionar ataque
    let seleccionarAtaque=document.getElementById("seleccionar-ataque")
    seleccionarAtaque.style.display="none"

    let reiniciar=document.getElementById("reiniciar")
    reiniciar.style.display="none"

    let botonMascotaJugador = document.getElementById("boton-mascotas")
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)
    //Ataques
    let botonFuego = document.getElementById("fuego")
    botonFuego.addEventListener("click",ataqueFuego)
    let botonAgua = document.getElementById("agua")
    botonAgua.addEventListener("click",ataqueAgua)
    let botonTierra = document.getElementById("tierra")
    botonTierra.addEventListener("click",ataqueTierra)

    //reinicia la pagina
    let butonReiniciar=document.getElementById("reiniciar")
    butonReiniciar.addEventListener("click",reiniciarVidas)
}
function ataqueFuego(){
    ataqueJugador="Fuego"
    ataqueDeEnemigo()
}
function ataqueAgua(){
    ataqueJugador="Agua"
    ataqueDeEnemigo()
}
function ataqueTierra(){
    ataqueJugador="Tierra"
    ataqueDeEnemigo()
}
function ataqueDeEnemigo(){
    let ataquePC = aleatorio(3,1)
    switch (ataquePC){
        case 1:
            ataqueEnemigo="Fuego"
            break
        case 2:
            ataqueEnemigo="Agua"
            break
        case 3:
            ataqueEnemigo="Tierra"
            break
    }
    combate()
}
function combate(){
    let spanVida_jugador = document.getElementById("vida-jugador")
    let spanVida_enemigo = document.getElementById("vida-enemigo")
        if (ataqueEnemigo!=ataqueJugador){
            if (ataqueEnemigo=="Fuego" && ataqueJugador=="Agua"){
                crearMensaje("Ganaste")
                vida_enemigo--
                spanVida_enemigo.innerHTML = vida_enemigo
            } else if (ataqueEnemigo=="Agua" && ataqueJugador=="Fuego"){
                crearMensaje("Perdiste")
                vida_jugador--
                spanVida_jugador.innerHTML = vida_jugador
            }
            if (ataqueEnemigo=="Tierra" && ataqueJugador=="Fuego"){
                crearMensaje("Ganaste")
                vida_enemigo--
                spanVida_enemigo.innerHTML = vida_enemigo
            } else if (ataqueEnemigo=="Fuego" && ataqueJugador=="Tierra"){
                crearMensaje("Perdiste")
                vida_jugador--
                spanVida_jugador.innerHTML = vida_jugador
            }
            if (ataqueEnemigo=="Tierra" && ataqueJugador=="Agua"){
                crearMensaje("Ganaste")
                vida_enemigo--
                spanVida_enemigo.innerHTML = vida_enemigo
            } else if (ataqueEnemigo=="Agua" && ataqueJugador=="Tierra"){
                crearMensaje("Perdiste")
                vida_jugador--
                spanVida_jugador.innerHTML = vida_jugador
            }
        }else{
            crearMensaje("Empate")
        }
        revisarVidas()
}
function revisarVidas(){
    if (vida_enemigo==0){
        mensajeFinal("Ganaste")
        reiniciar()
    }else if(vida_jugador==0){
        mensajeFinal("Perdiste")
        reiniciar()
    }
}
function mensajeFinal(resultado){
    
    let sectionMensajes = document.getElementById("resultado")

    sectionMensajes.innerHTML=resultado

    let botonFuego = document.getElementById("fuego")
    botonFuego.disabled= true
    let botonAgua = document.getElementById("agua")
    botonAgua.disabled= true
    let botonTierra = document.getElementById("tierra")
    botonTierra.disabled= true

    let reiniciar=document.getElementById("reiniciar")
    reiniciar.style.display="block"
}
function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("resultado")
    let ataquesDelJugador = document.getElementById("ataque-del-jugador")
    let ataquesDelEnemigo = document.getElementById("ataque-del-enemigo")

    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")

    sectionMensajes.innerHTML=resultado
    nuevoAtaqueJugador.innerHTML=ataqueJugador
    nuevoAtaqueEnemigo.innerHTML=ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}
function aleatorio(max,min){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function seleccionarMascotaJugador(){
    let seleccionarMascota=document.getElementById("seleccionar-mascota")
    seleccionarMascota.style.display="none"

    let seleccionarAtaque=document.getElementById("seleccionar-ataque")
    seleccionarAtaque.style.display="flex"
    //Se comprueba si ha sido seleccionado mediante un true
    let spanMascotaJugador=document.getElementById("mascota-jugador")
    if (document.getElementById("hipodoge").checked){
        spanMascotaJugador.innerHTML = "hipodoge"
    }else if(document.getElementById("capipepo").checked){
        spanMascotaJugador.innerHTML = "capipepo"
    }else if(document.getElementById("ratigueya").checked){
        spanMascotaJugador.innerHTML = "ratigueya"
    }else{
        alert("Seleccionar una mascota")
    }
    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let spanMascotaEnemigo=document.getElementById("mascota-enemigo")
    let ataquealeatorio=aleatorio(3,1)
    if (ataquealeatorio==1){
        spanMascotaEnemigo.innerHTML = "hipodoge"
    }else if(ataquealeatorio==2){
        spanMascotaEnemigo.innerHTML = "capipepo"
    }else{
        spanMascotaEnemigo.innerHTML = "ratigueya"
    }
}
function reiniciarVidas(){
    location.reload()
}
window.addEventListener("load", iniciarJuego)