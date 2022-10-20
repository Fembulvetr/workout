import React, { useState } from "react";
import './content.css';

const Content = () => {
    const [counter, setCounter] = useState(0);

    const clickAdd = () => {
        setCounter(counter + 1)
    }
    const clickClear = () => {
        if(counter >= 1) {
            setCounter(counter * 0)
        }
    }

    return (
        <div className="content">
            <a onClick={clickAdd}className="counterBtn">Підхід</a>
            <div className="counter">{counter}</div>
            <a onClick={clickClear} className="counterBtn">Кінець</a>
        </div>
    )

}

export default Content;

