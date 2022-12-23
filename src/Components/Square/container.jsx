import React, { useState } from "react";

import SquareComponent from "./component";

const Square = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    return (
        <SquareComponent 
        counter = {counter}
        increment = {increment}
        decrement = {decrement}
        />
    )
}

export default Square
