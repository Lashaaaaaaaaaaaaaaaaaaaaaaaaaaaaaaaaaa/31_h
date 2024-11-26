import './App.css'
import Counter from './features/counter/Counter'
import './scss/main.scss'

function App() {
  return (
    <>
      <h1>{import.meta.env.VITE_TITLE}</h1>
      <Counter />
    </>
  )
}

export default App
