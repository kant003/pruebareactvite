import { useState } from "react"


function Counter() {
    const [value, setValue] = useState(1)

    return <>
        <div>El valor es {value}</div>
        <button onClick={()=>setValue(value + 1)}>Incrementar</button>
        <button onClick={()=>setValue(value - 1)}>Decrementar</button>
        <button onClick={()=>setValue(0)}>Reset</button>
    </>
}

export default Counter