import { useEffect, useState } from "react"
import Buttons from "./buttons"
import './counter.css'
import kushima from './kushima.png'
import minato from './minato.jpg'
import Container from "@mui/material/Container";
import { Box } from "@mui/material";


export function Counter() {

    const [qtdman, setQtdman] = useState(0)
    const [qtdwoman, setQtdwoman] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(qtdman + qtdwoman)
    }, [qtdman, qtdwoman])

    function Zerar() {
        setQtdman(0)
        setQtdwoman(0)
    }

    return (
        <div class="grade">
            <div class="avatar-container">
                <div class="total-container">
                    <h2 class="total-button-container">
                        <span>Total: {total}</span>
                        <button class="reset-button" onClick={Zerar}>Reset</button>
                    </h2>
                </div>
                <div>
                    <img src={minato} alt={'Avatar Man'} class="avatar" />
                    <div class="counter">
                        <Buttons status='add' onClick={() => setQtdman(qtdman + 1)} />
                        <p class="count">{qtdman}</p>
                        <Buttons status='decrementar' onClick={() => setQtdman(qtdman - 1)} />
                    </div>
                </div>
                <div>
                    <img src={kushima} alt={'Avatar Woman'} class="avatar" />
                    <div class="counter">
                        <Buttons status='add' onClick={() => setQtdwoman(qtdwoman + 1)} />
                        <p class="count">{qtdwoman}</p>
                        <Buttons status='decrementar' onClick={() => setQtdwoman(qtdwoman - 1)} />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Counter;