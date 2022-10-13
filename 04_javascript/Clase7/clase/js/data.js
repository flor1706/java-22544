console.log("ingreso js")

// funciones
let a=4
let b=5
console.log(`a+b=${a+b}`)

// función no se ejecuta sino la llamo
function sumar() {
    console.log(`función sumar: a+b=${a+b}`)
}
// llamé a la función
sumar()
sumar()
a=6
sumar()

// función con parámetros
function restar(a, b) {
    console.log(`a=${a}`)
    console.log(`b=${b}`)
    console.log(`función restar: ${a}-${b}=${a-b}`)
}
restar(5,7)
restar(33,22)
restar(53,4)

function raizCuadrada(z) {
    if (z<0) {
        document.getElementById("msjRaiz").innerHTML=`Raíz cuadrada valores negativos no Eziste `    
        document.getElementById("msjRaiz").className="bg-danger my-2 pz-1 tezt-center"
    } else {
        let result=Math.sqrt(z)
        console.log(`Raíz cuadrada de ${z}=${result} `)
        document.getElementById("msjRaiz").innerHTML=`Raíz cuadrada de ${z}=${result} `
            
    }

}

raizCuadrada(16)
raizCuadrada(18)


// funciones que devuelven un valor
function multiplicar(a,b) {
    return a*b
}

let result=multiplicar(3,4)
result+=10
console.log(`resultado multiplicación + 10 ${result}`)

// ejemplo de uso de función que devuelve un valor
function calcularSueldo(categoria) {
    let sueldo=70000

    switch (categoria) {
        case "A":
            porcentaje=10
            break;
        case "B":
            porcentaje=25
            break;
        case "C":
            porcentaje=35
            break;
                
        default:
            break;
    }
    //suma a la var sueldo el %
    sueldo+=sueldo*porcentaje/100

    return sueldo
}

let sueldo1=calcularSueldo("A")
let sueldo2=calcularSueldo("B")
let sueldo3=calcularSueldo("C")
let sueldo4=calcularSueldo("A")

console.log(`Sueldo de empleado 1 ${sueldo1}`)
console.log(`Sueldo de empleado 2 ${sueldo2}`)
console.log(`Sueldo de empleado 3 ${sueldo3}`)
console.log(`Sueldo de empleado 4 ${sueldo4+1000}`)

// funcion flecha
function dividir(a,b) {
    return a/b
}

dividir(32,3)

let dividirFlecha=(a,b)=>a/b
dividirFlecha(5,4)
dividirFlecha(51,24)

let sumaFlecha=(a,b)=>a+b

let calcularSueldoFlecha=(categoria)=>{
    let sueldo=70000

    switch (categoria) {
        case "A":
            porcentaje=10
            break;
        case "B":
            porcentaje=25
            break;
        case "C":
            porcentaje=35
            break;
                
        default:
            break;
    }
    //suma a la var sueldo el %
    sueldo+=sueldo*porcentaje/100

    return sueldo
}

//Función anónima
let raiz=function(a) {
    return Math.sqrt(a);
};
console.log(raiz(16))

//flecha
let raizFlecha=(a)=>Math.sqrt(a)
console.log(raizFlecha(16))

//kcomun
function raizComun(a) {
    return Math.sqrt(a)
}

/** Array
 * variable especial puede contener más de un valor a la vez
*/

let sueldo10=70000
let sueldo11=78000
let sueldo12=123213
let sueldo13=123213
let sueldo14=123213
// sueldo10=aumentarSueldo(sueldo10)
console.log(sueldo10)
sueldo11+=sueldo11*10/100

let sueldos=[70000,75000,60000,89000,445000,56550]
sueldos[0] //consulto el sueldo en la posición 0 70000
sueldos[4]
sueldos[5]=57000 //modifico el valor de la posición 5
sueldos[4]=45000

for (let i = 0; i < sueldos.length; i++) {
    console.log(sueldos[i])
    sueldos[i]+=sueldos[i]*10/100  //modificos sueldos[i] y lo aumento un 10%
    console.log(`sueldo con aumento ${sueldos[i]}`)
}

let aumentarSueldo=(sueldo)=>sueldo+=sueldo*10/100

let arrayTipos=[111,"dfsdf",true,222]
console.log(arrayTipos)

// array propiedades y métodos
sueldos.length //long del array 6
console.log(sueldos)
sueldos.sort() //ordena el array y lo modifica
console.log(sueldos)
sueldos.pop()
console.log(sueldos)
sueldos.push(100000)
console.log(sueldos)

// matrices
let butacas=[
    ["A1", "A2", "A3"], //fila A
    ["B1", "B2", "B3", "B4"], //fila b
    ["C1", "C2", "C3"] //fila c
]
butacas[0][2] //B3
butacas[0][3] //B4

butacas[1][1]="B22" //B3

for (let i = 0; i < butacas.length; i++) {
    console.log(butacas[i])
    for (let j = 0; j < butacas[i].length; j++) {
        console.log(butacas[i][j])
    }
}

//for of, for each java php
for(suel of sueldos) {
    console.log(suel)
}

for (fila of butacas) {
    for (colum of fila) {
        console.log(colum)
    }
}

// métodos con callback
// foreach
sueldos=[50000,60000,70000,80000]

function aumentar5000(sueldo, indice, array) {
    console.log(sueldo)
    console.log(indice)
    console.log(array)
    sueldo+=5000
}

sueldos.forEach(aumentar5000)

// calcular sumatoria de sueldos
let sum=0
sueldos.forEach(sumatoria)

function sumatoria(sueldo) {
    sum+=sueldo //50000 60000
}

let promedio=sum/sueldos.length




let edades=[23,12,26,64,10,25,65]
esMayorEdad(edades[0]) //23 true
esMayorEdad(edades[1]) //12 false

//devuelve true si todas las edades son mayorDeEdad, false si alguna es menor de edad
function todosMayorDeEdad() {
    let mayor=true
    // todo: hacer un while para que salga si mayor=false
    for (let i = 0; i < edades.length; i++) {
        mayor=mayor && esMayorEdad(edades[i])
        console.log(mayor)
    }

    return mayor
}    
todosMayorDeEdad()

function esMayorEdad(edad, indice, edades) {
    return edad>=18
}

/*
    every informa si todos los elementos cumplen con la condición
    envóio como parámetro una fucnión
*/
edades=[23,12,26,64,10,25,65]
edades.every(esMayorEdad)  //determina si todos los edades son mayor de edad
console.log(edades.every(esMayorEdad))
let arrayMayorEdad=edades.filter(esMayorEdad) //devuelve un array con los elemenos mayor  de edad
console.log(arrayMayorEdad)

let algunoMayorEdad=edades.some(esMayorEdad)
console.log(algunoMayorEdad)

todosMayorDeEdad=edades.every(esMayorEdad)
console.log(todosMayorDeEdad)

sueldos=[50000,60000,70000,80000]
let sueldosAumentados=sueldos.map(aumentar2000)

function aumentar2000(sueldo) {
    console.log(sueldo)
    sueldo+=1000
    console.log(sueldo)
}

console.log(sueldosAumentados)

/** CallBack o retrollamada 
 * se envía una función como parámetro
*/


/** FOR Each */
sueldos=[50000,60000,70000,80000]
for (let i = 0; i < sueldos.length; i++) {
    sueldos[i]+=1000
}

for (suel of sueldos) {
    suel+=1000
}

//foreach recorre todo el array sueldos y le aplica la función que está como parámetro
sueldos=[50000,60000,70000,80000]
function aumentar2000(sueldo, indice, sueldos) {
    /**
     * sueldo=50000
     * sueldo=60000
     * sueldo=70000
     * sueldo=80000
     */
    sueldo+=2000
    
    //modifica el array sueldo y le coloca el nuevo sueldo aumentado
    sueldos[indice]=sueldo
}
sueldos.forEach(aumentar2000)
console.log(sueldos)

/** sumatoria */
sueldos=[50000,60000,70000,80000]

//buena práctica es declarar variables y funciones y luego utilizarlas
var z=0
function sumatoriaCallBack(sueldo, indice, sueldos) {
    /**
     * sumat=0, sueldo=50000, sumat=50000
     * sumat=50000, sueldo=60000, sumat=110000
     * sumat=110000, sueldo=70000, sumat=180000
     */
    console.log(`sueldo: ${sueldo}`)
    console.log(`z: ${z}`)
    z+=sueldo // sumat=sumat+sueldo
    console.log(`z: ${z}`)
    console.log(`indice:${indice}`)
    console.log(`sueldos:${sueldos}`)
}

sueldos.forEach(sumatoriaCallBack)

console.log(z)


/** MÉTODOS DE LOS ARRAYS */
edades=[23,12,55,56,17,85]

function esMayorDeEdad(edad, indice) {
    /**
     * edad=23, indice=0, return true
     * edad=12, indice=1, return false
     * edad=55, indice=2, return true
     */
    return edad>=18
}

//da true todos los elementos del array son mayores de edad
edades.every(esMayorDeEdad) //false

function esMenorEdad(edad) {
    /**
     * edad=23, indice=0, return false
     * edad=12, indice=1, return true
     * edad=55, indice=2, return false
     */
    return edad<18
}

edades.every(esMenorEdad) //false

//filter devuelve un array nuevo con todos mayores de edad
edades=[23,12,55,56,17,85]
let edadesMayores=edades.filter(esMayorDeEdad)
console.log(edadesMayores)

let edadesMenores=edades.filter(esMenorEdad) //!true=false
console.log(edadesMenores)

edades.every(esMayorDeEdad) //es true si todos los elementos son mayor de edad
edades.some(esMayorDeEdad) //es true si alguno es mayor de edad


//reduce
edades=[23,12,55,56,17,85]
function sumatoriaReduce(sumaR, edad, indice, edades) {
    /**
     * sumarR=0, edad=23, return 23
     * sumarR=23, edad=12, return 35
     * sumarR=35, edad=55, return 90
     */
    sumaR+=edad
    return sumaR
}
let sumatoriaEdades=edades.reduce(sumatoriaReduce)