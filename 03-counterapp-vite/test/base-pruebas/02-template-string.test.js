import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => { 
    test('Funcion debe retronar "Hola name" ', () => { 
        const name = "Fernando";
        const mensaje = getSaludo(name);

        expect(mensaje).toBe(`Hola ${name}`);
    });
});;