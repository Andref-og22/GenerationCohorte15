// Parte 1 (Info del cliente)

const customerName = "Juan";
const customerCity = "Cali";
let rappiPrime = true;

console.log(`Hola ${customerName}, bienvenido a Rappi, para la ciudad de ${customerCity}.`);

console.log("");
// Parte 2 (Info del pedido)

let productosPedidos = ["Hamburguesa", "Papas fritas", "Gaseosa", "Helado", "Pizza", "Ensalada"];
console.log(`Productos pedidos: ${productosPedidos}`);
console.log(`Producto especial: ${productosPedidos[0]}`);

console.log("");
productosPedidos.push("Postre");
console.log(`Productos pedidos actualizados: ${productosPedidos}`);
productosPedidos.pop();
console.log(`Productos pedidos actualizados: ${productosPedidos.length}`);

// Parte 3 (Unificación del pedido)

const PEDIDO = {
    cliente: customerName,
    ciudad: customerCity,
    primeOrNot: rappiPrime,
    productos: productosPedidos,
    estado: "En preparación",
}

console.log("");
console.log(PEDIDO);

console.log("");
console.log(`${PEDIDO.cliente}`);

console.log("");
console.log("El pedido avanza.");
console.log("");
PEDIDO.estado = "En camino";
console.log(PEDIDO);


// Parte 4 (Valor del pedido)


//------- Productos y valores -------
let valorProductos = { Hamburguesa: "15000", Papas: "8000", Gaseosa: "5000", Helado: "7000", Pizza: "20000", Ensalada: "10000" };

//------- Declaración de constantes para domicilio y propina -------
const valorDomicilio = 6000;
const propina = 0.10;

console.log("");

// -------- Sumamos los valores de los productos, llamando con Object.values solo a los valores de los elementos, y con Number los pasamos de string a números
let sumaProductos = Number(Object.values(valorProductos)[0]) + Number(Object.values(valorProductos)[1]) + Number(Object.values(valorProductos)[2]) + Number(Object.values(valorProductos)[3]) + Number(Object.values(valorProductos)[4]) + Number(Object.values(valorProductos)[5]);
//--------- Creamos una variabe para el cálculo del subtotal ------------
let subtotal = sumaProductos + valorDomicilio;

//--------- Armamos la factura del pedido ----------
console.log("Pedido: " + valorProductos);
console.log(`Domicilio: ${valorDomicilio};`);
console.log(`Subtotal: ${subtotal}`);
console.log(`Propina: ${subtotal * propina}`);

console.log("");
// ---------- Valor total del pedido ----------
console.log(`Valor total del pedido de ${PEDIDO.cliente}: ${subtotal + (subtotal * propina)}`);

console.log("");

// Trampa intecional 

//let subTOTAL = "20000";
//const domicilio = 3500;

//console.log(`Total a pagar por ${PEDIDO.cliente}: ${subtotal + domicilio}`);
//console.log(`Total a pagar por ${PEDIDO.cliente} corregido: ${Number(subtotal) + domicilio}`);