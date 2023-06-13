import { useState } from 'react'
import Card from './Card'
import "./Cards.css";
import kitty01 from './img/kitty01.png';
import kitty02 from './img/kitty02.png';
import kitty03 from './img/kitty03.png';
import kitty04 from './img/kitty04.png';
import kitty05 from './img/kitty05.png';
import kitty06 from './img/kitty06.png';
import kitty07 from './img/kitty07.png';
import kitty08 from './img/kitty08.png';

function Cards() {
    const [items, setItems] = useState([
        { id: 1, img: { kitty01 }, stat: "" },
        { id: 1, img: { kitty01 }, stat: "" },
        { id: 2, img: { kitty02 }, stat: "" },
        { id: 2, img: {kitty02}, stat: "" },
        { id: 3, img: {kitty03}, stat: "" },
        { id: 3, img: {kitty03}, stat: "" },
        { id: 4, img: {kitty04}, stat: "" },
        { id: 4, img: {kitty04}, stat: "" },
        { id: 5, img: {kitty05}, stat: "" },
        { id: 5, img: {kitty05}, stat: "" },
        { id: 6, img: {kitty06}, stat: "" },
        { id: 6, img: {kitty06}, stat: "" },
        { id: 7, img: {kitty07}, stat: "" },
        { id: 7, img: {kitty07}, stat: "" },
        { id: 8, img: {kitty08}, stat: "" },
        { id: 8, img: {kitty08}, stat: "" },

    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current) {
        if (items[current].id == items[prev].id) {
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        } else {
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id) {
        if (prev === -1) {
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        } else {
            check(id)
        }
    }

    return (
        <div className="container">
            {items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            ))}
        </div>
    )
}

export default Cards