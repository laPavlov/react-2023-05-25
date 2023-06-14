import React, { useEffect, useState } from "react";
import { Ingredients } from "../Ingredients/Ingredients";

export const OrderCounter = ({ id, ingredients }) => {

    let [currentValue, setCurrentValue] = useState(0);

    return (
        <div key={id}>
            <div style={{ display: 'flex' }}>
                <button onClick={() => {
                    if (currentValue > 0) {
                        setCurrentValue(--currentValue);
                    }
                }}>-</button>
                <p>{currentValue}</p>
                <button onClick={() => {
                    if (currentValue < 5) {
                        setCurrentValue(++currentValue);
                    }
                }}>+</button>
            </div>

            {(currentValue != 0)
                ? <Ingredients ingredients={ingredients} />
                : ''}
        </div>
    );
};
