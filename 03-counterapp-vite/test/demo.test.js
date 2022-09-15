test('Es una prueba de demo',()=>{
    if(1===0){
        throw new Error("Aqui va el mensaje de error");
    }
});

test('flujo de pruebas',()=>{
    //inicializacion
    const mensaje = "Hola Mundo";

    //estimulo
    const mensaje2 = mensaje.trim();
    //observar comportamiento
    expect( mensaje ).toBe(mensaje2);
});

//agrupar test 
describe("Pruebas en <Grupo>",()=>{
    test('Es la primera prueba del grupo',()=>{
        if(1===0){
            throw new Error("Aqui va el mensaje de error");
        }
    });
});