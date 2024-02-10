//esto es lo mismo que hicimos abajo solo que usando la funcion abajo
/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';
*/
let intentos = 0;
//Definimos esta variable para ya no declarar la variable dentro de la función
let numeroSecreto = 0;
let listaNumerosSorteados = [ ];
let numeroMaximo = 10;

//podemos automatizarlo mediante una función
//agregamos dos parámetros para generalizar
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


//Declaración de una función, se utiliza la palabra reservada function
function verificarIntento() {
    //input es una etiqueta dentro del html, que representa a la caja de texto de la página
    //getElementById es como queryselector pero es más para cuando tenemos más de un input 
    //usamos parseInt para comparar ambos que sean numeros
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //el triple igual es para comparar valor con valor, en dado caso de que no de

    if (numeroDeUsuario === numeroSecreto) {
        //esto es para cambiar el parráfo, comunicarnos con el usuario, es como los alert pero ahora en parráfo
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1 ? 'vez' : 'veces')}`);
    
        //Para remover el diabled usando el metodo remove atribute, ya que disabled es un atributo
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else {
        //El usuario no acertó
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor')
        } else {
            asignarTextoElemento('p','El número secreto es mayor')
        }
        intentos++;
        //Dejar en blanco la caja
        limpiarCaja();
    }

    return;
}

//Crearemos una función que limpié el campo cuando no se acerte y la introduciremos en el código
function limpiarCaja() {
    //obtener elemento, por id pero usando query, usando el gato
     document.querySelector('#valorUsuario').value = '';
}

//usamos return para resumir el 
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            //esto es para incluirlo en nuestra lista
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }  
}

function condicionesIniciales() {
    //las funciones las puedes mandar a llamar en cualquier línea de código, inclusive ante de su declaración
    //esto se llama hoisting
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    condicionesIniciales();
    //Generar el número alatorio
    //Inicializar el número de intentos
    //Deshabilitar el botón nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    //set.atribute es para es lo contarrio de remove 
}   

condicionesIniciales();