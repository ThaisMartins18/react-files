import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Home';
import Atv01 from './React/Atv01/data_hora.js';
//import Atv01 from './React/Atv01/letreiro.js';
import Atv02 from './React/Atv02/counter.js';
import Atv06 from './React/Atv06/Calculator';
import Atv07 from './React/Atv07/Cards';


export default function MinhasRotas(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/src/React/Atv01/data_hora.js" element={<Atv01/>} />
            <Route path="/src/React/Atv01/letreiro.js" element={<Atv01 frase={"Venha estudar na fatec!"}/>} />
            <Route path="/src/React/Atv02/counter.js" element={<Atv02/>} />
            <Route path="/src/React/Atv06/Calculator.jsx" element={<Atv06/>} />
            <Route path="/src/React/Atv07/Cards.js" element={<Atv07/>} />
        </Routes>
        </BrowserRouter>
    );
}