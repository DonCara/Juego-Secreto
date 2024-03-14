let NumeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento,texto){
    let elemtoHTML = document.querySelector(elemento);
    elemtoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  //  console.log(NumeroSecreto);
    if (numeroDeUsuario === NumeroSecreto){
        asignarTextoElemento('p',`Acertaste en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(numeroDeUsuario > NumeroSecreto){
            asignarTextoElemento('p','El número secreto es menor :(');
        }else{
            asignarTextoElemento('p','El número secreto es mayor :((');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números :(');

    }else{
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}


function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    //limiteJuego();
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    intentos = 1;
    NumeroSecreto = generarNumeroSecreto();
}


function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
    
}

function limiteJuego(){
   numeroMaximo = asignarTextoElemento('p','Por favor digita el número maximo de juegos');
   return numeroMaximo;
}

condicionesIniciales();


