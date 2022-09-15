import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones',()=>{
    test('getUser debe retornar objeto',()=>{
        
        const testUser ={
                uid: 'ABC123',
                username: 'El_Papi1502'
            };

        const user = getUser();
        
        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo devuelve un objeto',() => { 
        const name = "Julian";
        const usuario = {
            uid: 'ABC567',
            username: name
        };

        const usuarioActivo= getUsuarioActivo(name);

        expect(usuarioActivo).toEqual(usuario);
    });
});