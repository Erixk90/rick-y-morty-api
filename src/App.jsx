import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Index from './components/Index'
import Characters from './components/Characters'

import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/character/:id' element={<Characters/>}/>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
