import { getImagen } from "../../src/base-pruebas/11-async-await";


describe("Pruebas asincronas y await",()=>{
    test('getImage debe retornar url', async() => {
        const url = await  getImagen(); 
        console.log(url); 
        expect(typeof url).toBe('string');
    })
});