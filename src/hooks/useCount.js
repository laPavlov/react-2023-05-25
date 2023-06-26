import { useState, useCallback } from "react";

export function useCount(initValue = 0) {

    let [count, setCount] = useState(initValue);

    const increment = useCallback(
        () => {
            setCount(++count);
        },
        [initValue]
    );

    const decrement = useCallback(
        () => {
            setCount(--count);
        },
        [initValue])

    return [count, increment, decrement];
}