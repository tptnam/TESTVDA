import './App.css'
import Body from './components/body'
import Navbar from './components/header/Navbar'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Body />
    </div>
  )
}

export default App
