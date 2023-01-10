import './App.css'
import Counter from './components/Counter'
import Greetings from './components/Greetings'
import PokemonList from './components/PokemonList'

function App() {

  return (
    <>
      <Greetings name='Antonio'/>
      <Greetings name='Bea'/>
      <Counter/>
      <PokemonList/>
    </>
  )
}

export default App
