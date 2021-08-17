// 1) triple ed los que son pares
// La NASA nos pidió un programa que calcule la edad de las personas en sus planetas favoritos. Para eso necesitamos una web (sencilla!!) donde solicitaremos mediante un input y un select al usuario, su edad en la tierra y su planeta favorito. Luego, mostrarle en un tercer input o en un párrafo en el html, su edad correspondiente al planeta que eligió.
// Días que tardan en dar la vuelta al sol:
// Mercurio: 87.97
// Venus: 224.7
// Tierra: 365.26 (Por esto cada 4 años hay un año bisiesto)
// Marte: 686.68
// Jupiter: 4,331.98
// Saturno: 10,760.55
// Urano: 30,685.49
// Neptuno: 60,191.19

// let seleccion = document.querySelector('#planetas option:checked').value;

// const calculoEdad = () => {
//     const edadUsuario = document.querySelector('#edadusuario').value;
//     const planetas = document.querySelector('#planetas').value;
//     const result = document.querySelector('#result');
//     result.value = ((parseInt(`${edadUsuario}`) * 365) / (parseInt(`${planetas}`))).toFixed(0);
// };



// // 2) Un vivero nos pide armar un sistema que ayude a las personas a decidir qué tipo de planta colocar en su jardín según la flor que quieran. Para eso, les daremos diferentes opciones (mediante un select, o mediante botones), para que puedan elegir varios tipos de flor. Al elegir una flor, se debe mostrar su imagen. Cuando se le pase el mouse por encima a esa imagen, debe mostrar como se ve el árbol de dicha flor. 

// const mostrarImagenTul = () => {
//     document.write(`<img src="Tulipanes.jpg" id="imagen" onclick="cambiarImagenTul()">`)
// }

// const mostrarImagenCer = () => {
//     document.write(`<img src="cerezo.jpg" id="imagen" onclick="cambiarImagenCer()">`)
// }

// function cambiarImagenTul(){
//     if (document.getElementById("imagen").src.endsWith('Tulipanes.jpg') == true)  //comparacion
//     { 
//          document.getElementById("imagen").src = "Tulipan.jfif"; //asignar valor  
//      } 
//      else if (document.getElementById("imagen").src.endsWith('Tulipan.jfif') == true) 
//      { 
//         document.getElementById("imagen").src = "Tulipanes.jpg";       
//     }
// }

// function cambiarImagenCer(){
//     if (document.getElementById("imagen").src.endsWith('cerezo.jpg') == true)  //comparacion
//     { 
//          document.getElementById("imagen").src = "cerezoarbol.jpg"; //asignar valor  
//      } 
//      else if (document.getElementById("imagen").src.endsWith('cerezoarbol.jpg') == true) 
//      { 
//         document.getElementById("imagen").src = "cerezo.jpg";       
//     }
// }

// 4) Una escuela de tango necesita organizar las inscripciones de sus alumnos.
// a) Mostrar la siguiente infomación de alumnos en una web.
// b) Mostrar en verde quienes pagaron y en rojo quienes no pagaron.

const alumnos =[
 
    {
           "nombre": "Juana",
           "pago": true
       },
       {
           "nombre": "Santiago",
           "pago": true
       },
       {
           "nombre": "Esteban",
           "pago": false
       },
       {
           "nombre": "Lautaro",
           "pago": true
       },
       {
           "nombre": "Marian",
           "pago": false
       }
   ]

const comprobarPago = () => {
    for (i=0; i<alumnos.length; i++){
        if((alumnos[i].pago) === true){
            document.write(`<p class="verde">${alumnos[i].nombre}</p>`);
        } else{
            document.write(`<p class="rojo">${alumnos[i].nombre}</p>`);
        }
    }
}

comprobarPago();

// const nombres = alumnos.map(x => x.nombre);

// for (i=0; i<nombres.length; i++){
//     if(i === 2 || i === 4){
//         document.write(`<p class="rojo">${nombres[i]}</p>`);
//     } else{
//         document.write(`<p class="verde">${nombres[i]}</p>`);
//     }
// }


// 5) La AFA está realizando un concurso para ganarte una pelota firmada por Messi.
// Se le solicita a las personas que completen:
// Nombre: mínimo 3 y máximo 16 dígitos.
// Equipo favorito: No debe contener números.
// Edad: Debe ser mayor de edad para participar.
// DNI: Debe tener entre 7 y 8 caracteres.
// Mail: Debe ser un mail válido. Solo se aceptan participantes con mails que terminen en “.com” o “.ar” 
// Mensaje para Messi: Debe contener al menos 30 caracteres.

// const nombre = document.getElementById('nombre');
// const edad = document.getElementById('edad');
// const equipo = document.getElementById('equipo');
// const dni = document.getElementById('dni');
// const mail = document.getElementById('mail');
// const mensaje = document.getElementById('mensaje');
// const errorElement = document.getElementById('error');
// const form = document.getElementById('form');

// function validarEmail(email)
// {
//   let caracteresEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (email.match(caracteresEmail)) {
//     return true; 
//   } else {
//     return false; 
//   }
// }


// form.addEventListener('submit', (e) => {
//     let validaciones = [];
//     if(nombre.value === '' || nombre.value == null){
//         validaciones.push('El nombre es requerido');
//     }

//     if(nombre.value < 3 || nombre.value > 16){
//         validaciones.push('El nombre debe tener minimo 3 caracteres y máximo 16');
//     }

//     if(equipo.value.match(".*\\d.*")){
//         validaciones.push('Equipo no debe contener números');
//     }

//     if(edad.value < 18){
//         validaciones.push('Debe ser mayor de edad para participar');
//     }

//     if(dni.value.length < 7 || dni.value.length > 8){
//         validaciones.push('El dni debe tener entre 7 y 8 caracteres');

//     }

//     if(validarEmail(mail.value) === false){
//         validaciones.push('Email invalido');
//     }

//     if(validaciones.length > 0){
//         e.preventDefault();
//         errorElement.innerText = validaciones.join(', ');
//     }
// })


// 6) Papá Noel recibió una cantidad enorme de cartitas este año, por lo que no tuvo tiempo de decidir quienes habían sido buenos o malos, así que decidió armar un sistema de clasificación automático. Si el niño o niña pidió 3 o más de los siguientes objetos, será catalogado como “malo” y se le entregará carbón en navidad. Si pidió 2 o menos, entonces será catalogado como bueno. Los objetos que suman son:
// * Bicicleta, hermano/a/e, playstation, medias, mochila, piano*.
// -Para probar: Generar algún set de pruebas. Pueden usar objetos y/o arreglos. 

const objetos = ['bicicleta', 'hermano', 'playstation', 'medias', 'mochila', 'piano'];

// const pedidos = [
//     {nombre: 'Sofia', regalos: objetos[0, 4] },
//     {nombre: 'Victor', regalos: objetos[3, 1, 5]},
//     {nombre: 'Goku', regalos: objetos[0, 2, 5, 3]},
//     {nombre: 'Homero', regalos: objetos[2]},
//     {nombre: 'Daiana', regalos: objetos[3, 5, 0, 1]},
// ]

// console.log(pedidos);


// 7) Organizar asados es una tarea difícil cuando se trata de calcular la cantidad de comida y repartir los costos. Para eso, un grupo de amigos nos solicita que realicemos un programa que nos ayude a dividir la tarea. 
// Se calcula: 500gr de carne por persona. 1 Botella de cerveza por persona. 1 kilo de helado cada 4 personas. En caso de quedar por ejemplo: 1 kilo y medio, redondear siempre para arriba, es decir a dos kilos. 
// El programa debe recibir como dato la cantidad de comensales y debe devolver: Cantidad de carne, cervezas y helado para comprar, costo total y costo por persona. 
// Costos:
// * Carne por kilo: $700
// * Botella de cerveza: $200
// * Kilo de helado: $600
// Por ejemplo: Si son 5 personas serán:
// - 2.5kg de carne, 5 botellas de cerveza y 2 kilos de helado.
// - Precio total: $1750 de carne + $1000 de cervezas, $1200 de helado. Total: $3950. 
// - Precio por persona: $790.


// const carne = 0.5 // por persona
// const cerveza = 1 // por persona
// const helado = 1 // cada cuatro personas
// const precioCarne = 700 // por medio kilo
// const precioCerveza = 200
// const precioHelado = 600

// const calculo = () => {
//     const personas = document.getElementById('personas').value; // no me tomaba el value fuera de la funcion
//     let calculoCarne = personas * carne; 
//     let calculoCerveza = personas * cerveza;
//     let calculoHelado;
//     if(personas >= 4){
//         calculoHelado = Math.ceil(personas/4);
//     } else{
//         calculoHelado = 0;
//     }

//     let totalCarne = calculoCarne * precioCarne;
//     let totalCerveza = calculoCerveza * precioCerveza;
//     let totalHelado = calculoHelado * precioHelado;
//     let total = totalCarne + totalCerveza + totalHelado;
//     let precioPersona = (total / personas).toFixed(2);

//     document.write(`<p>- ${calculoCarne}kg de carne, ${calculoCerveza} botellas de cerveza y ${calculoHelado} kilos de helado.</p>`);
//     document.write(`<p>- Precio total: $${totalCarne} de carne + $${totalCerveza} de cervezas, $${totalHelado} de helado. Total: $${total}.</p>`);
//     document.write(`<p>- Precio por persona: $${precioPersona}.</p>`);
// }







