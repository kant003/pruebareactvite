import { useState } from "react"

function UserForm(){
    const [name, setName] = useState('Angel')
    const [surname, setSurname] = useState('pepe')
    function handleChangeName(e){
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        alert(name + ',' + surname)
    }
    
    return (
        <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-col gap-4 border rounded-md p-4">
            <label htmlFor="name">
                Nombre: <input onChange={(e)=>handleChangeName(e)} id="name" value={name}></input>
            </label>
            <label htmlFor="surname">
                Apellidos: <input onChange={(e)=>setSurname(e.target.value)} id="surname" value={surname}></input>
            </label>
            <button type="submit">Enviar</button>
            <br/>
            {name} | {surname}
        </form>
    )
}
export default UserForm