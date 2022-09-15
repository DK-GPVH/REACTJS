import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes';

describe('Pruebas de 08',()=>{
    test('getHeroeById retorna heroe por id', () => { 
        const id= 1 ;

        const heroes = getHeroeById(id);

        expect(heroes).toEqual({id: 1, name: 'Batman', owner: 'DC'});
    });

    test('Devolucion de undefined cuando heroe no exista',()=>{
        const id= 100 ;

        const heroes = getHeroeById(id);
        
        //tambien pasa si es falso
        expect(heroes).toBeFalsy();
    });

    test('Devolucion de los heroes por compañia DC',()=>{
        const owner = 'DC';
        const heros = getHeroesByOwner(owner);
        expect(heros.length).toBe(3);
        expect(heros).toEqual([{ id: 1, name: 'Batman', owner: 'DC' },{ id: 3, name: 'Superman', owner: 'DC' },{ id: 4, name: 'Flash', owner: 'DC' }]);
        expect(heros).toEqual(heroes.filter((heroe)=> heroe.owner === owner));
    });

    test('Devolucion de los heroes por compañia Marvel',()=>{
        const owner = 'Marvel';
        const heros = getHeroesByOwner(owner);
        
        expect(heros.length).toBe(2);
        expect(heros).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);

        expect(heros).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    });
});