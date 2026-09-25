let perfil = {
    nombre: "Juan",
    edad: 24,
    ocupacion: "Trabaja",
    fotoPerfil:"url",
}

console.log(perfil);

// 2do ejemplo con un elemento que tiene un array.

const jugador = {
    nombre: "Andres",
    nivel: 5,
    vidas: 3,
    tieneLlaves: false,
    inventario: ["Espada", "Poción"],
}

console.log(jugador.nombre);
console.log(jugador.nivel);

jugador.tieneLlaves = true;
jugador.vidas = jugador.vidas -1;

jugador.push("Monedas");
jugador.monedas = 200;

console.log(jugador);
console.log(jugador.inventario[1]);
jugador.inventario.push("Mapa");

console.log(`${jugador.nombre} tiene ${jugador.inventario.length} objetos en su inventario`);

console.log(jugador.puntos);
console.log(jugador.compañero);
