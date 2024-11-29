// utils.js
function cuadrado(num) {
    return num * num;
}

function esImpar(num) {
    return num % 2 !== 0;
}

function obtenerMinimo(array) {
    return array.length ? Math.min(...array) : undefined;
}

function aCamelCase(cadena) {
    return cadena.split('-').map((palabra, index) => 
        index === 0 ? palabra : palabra[0].toUpperCase() + palabra.slice(1)
    ).join('');
}

function filtrarImpares(array) {
    return array.filter(num => num % 2 !== 0);
}

module.exports = { cuadrado, esImpar, obtenerMinimo, aCamelCase, filtrarImpares };
