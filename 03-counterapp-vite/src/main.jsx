import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./components/FirstApp";
import {App,Hola} from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <Hola />
        <FirstApp/>
    </React.StrictMode>
)