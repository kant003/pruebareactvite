import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
// npm i react-router-dom
import './App.css'
import Counter from './components/Counter'
import Greetings from './components/Greetings'
import Navbar from './components/Navbar'
import PokemonList from './components/PokemonList'
import User from './components/User'
import UserForm from './components/UserForm'
function App() {

  return (
    <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Greetings name='Antonio'/>}/>
        <Route path="/contador" element={<Counter/>}/>
        <Route path="/pokemons" element={<PokemonList/>}/>
        <Route path="/userInfo/:id" element={<User/>}/>
        <Route path="/userForm" element={<UserForm/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
