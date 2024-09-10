import React, { useState } from 'react';
// 1.Identify the errors in the code that prevent the app from working correctly.
// 2.Fix the errors so that the counter app functions as expected.
// 3.Make sure the buttons properly increase, decrease, and reset the count.

function Counter() {
    const [count, setCount] = useState;

    function handleIncrease() {
        setCount(count + 1);
    }

    function handleDecrease() {
        setCount(count - 1);
    }

    function resetCounter {
        setCount(0);
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onclick={handleIncrease}>Increase</button>
            <button onclick={handleDecrease}>Decrease</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    );
}

export default Counter;
