import './App.css';
import Home from './Components/HomePage/Home.js'
import About from './Components/AboutUs/About.js'
import MutualFunds from './Components/Mutual-Funds/MutualFunds';
import {Link, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div>
        <section className="nav-container">
            <div className="navigation-bar">
                <nav>
                    <Link to="/"><h1 className="title">STOOLER</h1></Link>
                    <ul>
                        <li><a><Link to="/about">ABOUT US</Link></a></li>
                        <li><a><Link to="/mutual-funds">MUTUAL FUNDS</Link></a></li>
                        <li><a><Link to="/">TAXATION</Link></a></li>
                        <li><a><Link to="/">DOWNLOADS</Link></a></li>
                        <li><a><Link to="/">CONTACT US</Link></a></li>
                    </ul>
                </nav>
            </div>
        </section>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/mutual-funds" element={<MutualFunds/>}/>
      </Routes>
      <div className="bg-light text-center ending">
          <div className="text-center p-3 end">
              © 2020 Copyright :
              <a className="text-light" href="."> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</a>
          </div>
      </div>
    </div>
  );
}

export default App;
