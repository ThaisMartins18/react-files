import React from "react";
import { Link } from 'react-router-dom';

const Home = () =>{
    return (
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/src/React/Atv01/data_hora.js" className="btn btn-primary">Atividade 1</Link>
                    </li>
                    <li>
                        <Link to="/src/React/Atv01/letreiro.js" className="btn btn-primary">Atividade 1.1</Link>
                    </li>
                    <li>
                        <Link to="/src/React/Atv02/counter.js" className="btn btn-primary">Atividade 2</Link>
                    </li>
                    <li>
                        <Link to="/src/React/Atv06/Calculator.jsx" className="btn btn-primary">Atividade 6</Link>
                    </li>
                    <li>
                        <Link to="/src/React/Atv07/Cards.js" className="btn btn-primary">Atividade 7</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;

