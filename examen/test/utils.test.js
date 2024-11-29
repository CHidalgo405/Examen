const { expect } = require('chai');
const { cuadrado, esImpar, obtenerMinimo, aCamelCase, filtrarImpares } = require('../utils');

describe('Pruebas de funciones de utilidades', () => {

    describe('1.- Devuelve el cuadrado de un número', () => {
        it('debe devolver el cuadrado de un número positivo', () => {
            expect(cuadrado(5)).to.equal(25);
        });

        it('debe devolver el cuadrado de un número negativo', () => {
            expect(cuadrado(-3)).to.equal(9);
        });
    });

    describe('2.- Devuelve true si el número es impar, de lo contrario, devuelve false.', () => {
        it('debe devolver true para números impares', () => {
            expect(esImpar(7)).to.be.true;
        });

        it('debe devolver false para números pares', () => {
            expect(esImpar(10)).to.be.false;
        });
    });

    describe('3.- Devuelve el número mínimo de un arreglo de números.', () => {
        it('debe devolver el número más pequeño del arreglo', () => {
            expect(obtenerMinimo([10, 5, 8, 1])).to.equal(1);
        });

        it('debe devolver undefined para un arreglo vacío', () => {
            expect(obtenerMinimo([])).to.be.undefined;
        });
    });

    describe('4.- Convierte una cadena con guiones a formato Camel Case.', () => {
        it('debe convertir una cadena con guiones a formato Camel Case', () => {
            expect(aCamelCase('hola-mundo')).to.equal('holaMundo');
        });

        it('debe manejar cadenas de una sola palabra correctamente', () => {
            expect(aCamelCase('hola')).to.equal('hola');
        });
    });

    describe('5.- Devuelve un nuevo arreglo que contiene solo los números impares del arreglo original.', () => {
        it('debe devolver un arreglo con los números impares', () => {
            expect(filtrarImpares([1, 2, 3, 4, 5])).to.eql([1, 3, 5]);
        });

        it('debe devolver un arreglo vacío si no hay números impares', () => {
            expect(filtrarImpares([2, 4, 6, 8])).to.eql([]);
        });
    });

});
