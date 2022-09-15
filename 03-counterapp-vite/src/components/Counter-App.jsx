import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value})=>{
    const [ Counter,setCounter] = useState(value);

    const add =()=>{
        // console.log("hola");
        //setCounter(Counter + 1);
        setCounter(Counter+1);
    };
    const sub = ()=>{
        setCounter(Counter-1);
    };
    const reset = ()=>{
        setCounter(value);
    }
    return <>
        <h1>CounterAPP</h1>
        <h2>{ Counter}</h2>

        <button onClick={add}> ADD +</button>
        <button onClick={sub}> SUBTRACT -</button>
        <button aria-label='btn-reset' onClick={reset}> RESET °</button>

    </>
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value : "No enviaste ningun valor"
}
