import { BrowserRouter, Route, Routes } from 'react-router-dom'
// npm i react-router-dom
import './App.css'
import Counter from './components/Counter'
import Greetings from './components/Greetings'
import PokemonList from './components/PokemonList'
function App() {

  return (
    <BrowserRouter>
      <a href="/">Home</a>
      <a href="/contador">Contador</a>
      <a href="/pokemons">Lista de pokemons</a>
      <Routes>
        <Route path="/" element={<Greetings name='Antonio'/>}/>
        <Route path="/contador" element={<Counter/>}/>
        <Route path="/pokemons" element={<PokemonList/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
