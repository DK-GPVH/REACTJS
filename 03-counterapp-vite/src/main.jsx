import React from "react";
import ReactDOM from "react-dom/client";
// import { FirstApp } from "./components/FirstApp";
// import {App,Hola} from './App';
import { CounterApp } from "./components/Counter-App";
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* //Enviar datos al props */}
        {/* <App title = "Hola"/> */}
        {/* <Hola /> */}
        {/* <FirstApp title="Hello"/> */}
        <CounterApp value={0}></CounterApp>
    </React.StrictMode>
)