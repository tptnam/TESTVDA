import { Badge, Button } from 'react-bootstrap'
import './App.css'

function App() {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <h1>
        Example heading
        <Badge bg='secondary' as={Button}>
          New
        </Badge>
      </h1>
    </div>
  )
}

export default App
