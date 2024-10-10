import './app.css';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LogIn from './pages/LogIn';
import SinUp from './pages/SinUp';
function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
      {/* <Route path='' element={} /> */}
        <Route path='/Login' element={<LogIn/>} />
        <Route path='/SinUp' element={<SinUp/>} />
        {/* <Route path='/' element={} /> */}
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
