/* Implement a hook called UseCounter 
The hook is responsible for returning 4 values
counter: current counter value
increment: function to increment counter value
decrement: function to decrement counter value
reset: function to reset counter value
 */

import { useState } from "react";

const useCounter = (initialValue) => {
    const [count, setCount] = useState(initialValue);
    const increment = () => setCount(count+1);
    const decrement = () => setCount(count-1);
    const reset = () => setCount(initialValue);

    return {count, increment, decrement, reset}
}

export default useCounter;