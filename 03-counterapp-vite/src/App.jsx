const App=(props)=>{
    console.log(props);
    return (<h1>{props.title}</h1>);
}

const Hola = ()=>(<div>Hola <img src=""/></div>);
export {
    App,
    Hola
}