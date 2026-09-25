// Declaramos las variables constantes necesarias.

const nombreDocumento = "CARNÉT GENERATION CO";
const NOMBRE1 = "Andres";
const NOMBRE2 = "Felipe";
const APELLIDOS = "Ordoñez Gonzalez";
const EDAD = 21;
const PRIMER_EMPLEO_TECH = true;
let lenguajesAdominar = "Java, JavaScript, Python, C#";

// Iniciamos a usar el console.log para mostrar en la terminal (iniciamos con un console.log vacío para un espacio)

// Console.log para espacio.
console.log("");

// Encabezado del carnet.
const ENCABEZADO = `============== ${nombreDocumento} ==============`;
console.log(ENCABEZADO);

// Otro console.log para espacio.
console.log("");

// Llamamos a las variables para mostrar en la pantalla.
console.log(`Nombre Completo: ${NOMBRE1} ${NOMBRE2} ${APELLIDOS}`);
console.log("Edad: " + EDAD + " años" + "   (" + (EDAD * 12) + " meses)");
console.log(`Busca su primer Empleo en Tech: ${PRIMER_EMPLEO_TECH}`);
console.log(`Quiere dominar: ${lenguajesAdominar}`);

// Console.log para espacio.
console.log("");

// Margen del carnet
console.log("==================================================");

// Console.log para espacio.
console.log("");

// Ponemos en pantalla el tipo de dato de las variables.
console.log(typeof nombreDocumento);
console.log(typeof NOMBRE1);
console.log(typeof NOMBRE2);
console.log(typeof APELLIDOS);  
console.log(typeof EDAD);   
console.log(typeof PRIMER_EMPLEO_TECH);
console.log(typeof lenguajesAdominar);

// Console.log para espacio.
console.log("");

// Mensaje final, de Feliz Cumpleaños de la edad próxima.
console.log(`FELIZ CUMPLEAÑOS,${NOMBRE1}`);
console.log("Ahora tienes " + (EDAD + 1) + " años");

// Console.log para espacio.
console.log("");


