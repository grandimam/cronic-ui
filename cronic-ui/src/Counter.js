import { useState } from "react"

export default function Counter() {
    let [count, setCount] = useState(0)

    const incCount = () => {
        count += 1
        setCount(count)
    }

    const decCount = () => {
        count -= 1
        setCount(count)
    }

    return (
        <div>
            <h3>Current Count: {count}</h3>
            <button className="incBtn" onClick={incCount}>Increment</button>
            <p>
                <button className="decBtn" onClick={decCount}>Decrement</button>
            </p>
        </div>
    )
}