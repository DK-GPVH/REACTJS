import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from '../../src/data/heroes';

describe('Pruebas en promesas',()=>{
    //debemos añadir done para los async => then
    test('Async debe retornar un heroe', (done) => { 
        const id = 1;
        getHeroeByIdAsync(id).then(hero=>{
            expect(hero).toEqual(heroes.find((heroe)=>heroe.id === id));
            console.log(hero);
            done();
        });
    });

    test('Async debe retornar un error catch',(done)=>{
        const id = 100;
        getHeroeByIdAsync(id)
        .then(hero =>{
            expect(hero).toBeFalsy();
            done();
        })
        .catch(err=>{
            
            expect(err).toBe(`No se pudo encontrar el héroe`+ id);
            done();
        })
    })
});
