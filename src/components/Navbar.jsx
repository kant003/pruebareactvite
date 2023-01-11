import { Link } from "react-router-dom"

function Navbar(){
    return (
        <nav className="flex gap-4 mb-4">
            <Link to="/">Home</Link>
            <Link to="/contador">Contador</Link>
            <Link to="/pokemons">Lista de pokemons</Link>
            <Link to="/userInfo/1234">Usuario favorito</Link>
            <Link to="/userForm">Formulario</Link>
        </nav>
    )
}

export default Navbar