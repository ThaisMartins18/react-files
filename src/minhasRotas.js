import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Home';
import Clock from './React/Atv01/data_hora.js';
import Letreiro from './React/Atv01/letreiro.js';
import Counter from './React/Atv02/counter.js';
import Calculator from './React/Atv06/Calculator';
import Cards from './React/Atv07/Cards';


export default function MinhasRotas(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/src/React/Atv01/data_hora.js" element={<Clock/>} />
            <Route path="/src/React/Atv01/letreiro.js" element={<Letreiro frase={"Venha estudar na fatec!"}/>} />
            <Route path="/src/React/Atv02/counter.js" element={<Counter/>} />
            <Route path="/src/React/Atv06/Calculator.jsx" element={<Calculator/>} />
            <Route path="/src/React/Atv07/Cards.js" element={<Cards/>} />
        </Routes>
        </BrowserRouter>
    );
}