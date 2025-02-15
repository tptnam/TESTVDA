import './App.css'
import Body from './components/body'
import Footer from './components/footer/Footer'
import Navbar from './components/header/Navbar'

function App() {
  return (
    <div className='tw-flex tw-flex-col tw-min-h-screen tw-overflow-x-hidden tw-w-full'>
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}

export default App
