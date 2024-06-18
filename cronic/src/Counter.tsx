import { useState } from "react"

export default function Counter() {
    let [count, setCount] = useState(0)

    const decCount = () => {
        count -= 1
        setCount(count)
    }

    const incCount = () => {
        count += 1
        setCount(count)
    }

    return (
        <div>
            <h2>What is the current count: {count}</h2>
            <button className="incBtn" onClick={incCount}>Add (+1)</button>
            <p>
                <button className="decBtn" onClick={decCount}>Sub (-1)</button>
            </p>
        </div>
    )
}