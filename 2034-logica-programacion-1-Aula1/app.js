//variables
let numeroMaximoPosible = 100;

let numeroSecreto = Math.floor(Math.random()*10) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntento = 5;
while (numeroUsuario != numeroSecreto){
    numeroUsuario = prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor`)

    console.log(numeroUsuario);
 
    //Aca realizo la comparacion
    if (numeroUsuario == numeroSecreto) {
        //Acertaste condicion verdadera
        alert(`Acertaste el numero ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' :'veces' }`);//AGREGAMOS TEMPLATE
    } else {
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor')
        } else {
            alert('el numero secreto es mayor')}
        //Incrementamos el contador, cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos ++;
        palabraVeces = 'veces';
        if(intentos > maximosIntento) {
            alert(`Lo siento, haz llegado al numero maximo ${maximosIntento} intentos`);
            break;
            }

        //condicion no se cumplio
        //alert('lo siento el numero es incorreto')
    }
}
   
   
   
/*let cantidadNumeros = prompt('Ingrese la cantidad de números para el cálculo del promedio:');
let suma = 0;
let contador = cantidadNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Ingrese el numero:'));
    suma += numero;
}

let promedio = suma / cantidadNumeros;

console.log(promedio);*/
   
   
   
   
   
   
   
   
   














