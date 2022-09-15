import PropTypes from "prop-types";

const objeto = {
    nombre : "Jorge",
    email : "@gmail.com",
    edad : 45
}

function funcion () {
    return console.log("hola");
}
export const FirstApp=(props)=>{
    //<Fragment> => <>
    return (
        //no se puede mandar objetos {}
        //para enviar objetos mediante stringify
        <>
        {/* <h1>{"Hola"}FirstApp</h1> */}
        {/* <p>{props.title}</p>
        <h1>{props.title}</h1>
        <h2>{JSON.stringify(objeto)}</h2>
        <h3>{funcion()}</h3>         */}
        {/*crando un data-testid*/}
        <h1 data-testid="test-title">{props.title}</h1>
        <p>{props.subtitle}</p>
        <p>{props.nombre}</p>
        </> 
        

    )
};

//definir los props por defecto
FirstApp.defaultProps = {
    subtitle:'No hay subtitulo',
    nombre:'no hay nombre',
    // title : 'No hay titulo',
}

//Atributos de los props
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

