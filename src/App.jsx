import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./App.css"
import Features from './compo/Features'
import Enterprise from './compo/Enterprise'
import Support from './compo/Support'
import Home from'./compo/Home'
import Footer from './compo/Footer'
function App() {
  return (
   < >
    <Router>
      <div className='header' >
      <h1>company name</h1>
         <nav className='nav'>
        <ul>
          <li>
            <Link to="/Features">Features</Link>
          </li>
          <li>
            <Link to="/about">Enterprise</Link>
          </li>
          <li>
            <Link to="/support">support</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      </div>
     

      <Routes>
        <Route path="/Features" element={<Features/>} />
        <Route path="/about" element={<Enterprise />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    <div className='app'>
    <Footer/>
    </div>
    
   </>
  )
}
export default App