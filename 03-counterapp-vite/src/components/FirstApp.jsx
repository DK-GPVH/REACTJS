const objeto = {
    nombre : "Jorge",
    email : "@gmail.com",
    edad : 45
}

function funcion () {
    return console.log("hola");
}
const FirstApp=()=>{
    //<Fragment> => <>
    return (
        //no se puede mandar objetos {}
        //para enviar objetos mediante stringify

        <>
        <h1>{"Hola"}FirstApp</h1>
        <p>Hola</p>
        <h2>{JSON.stringify(objeto)}</h2>
        <h3>{funcion()}</h3>        
        </> 
        

    )
};

export {
    FirstApp,
}