window.addEventListener("load", ()=> { /*escuchamos cuando se carga el documento*/
    //creamos dos constantes y nos guardamos los elementos que necesitamos
    const display = document.querySelector(".calculator-display");
    const keypadButtons = document.getElementsByClassName("keypad-button");

    //creamos otra constante para convertir el HTMLCollection a Array
    const keypadButtonsArray = Array.from(keypadButtons);

    //Iteramos por nuestro nuevo Array de botones
    keypadButtonsArray.forEach( (button) => {

        //A cada boton le agregamos un listener
        button.addEventListener("click", ()=>{
            calculadora(button, display)
        })
    })
})

function calculadora(button, display){
    switch (button.innerHTML) {
        case "C":
            borrar(display)
            break;
        case "=":
            calcular(display)
            break
        default:
            actualizar(display, button)
            break;
    }
}

function calcular(display){
    //eval tomar el string y lo va a resolver y guardarlo en el innerHTML del DISPLAY
    display.innerHTML = eval(display.innerHTML)
}

function actualizar(display, button){
    if (display.innerHTML == 0){
        display.innerHTML = ""
    }
    //display.innerHTML = display.innerHTML + button.innerHTML
    display.innerHTML += button.innerHTML;
}

function borrar (display) {
    display.innerHTML = 0
}