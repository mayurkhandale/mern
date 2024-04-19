import {BrowserRouter ,Routes,Route,Link} from 'react-router-dom'
import './App.css';
import Read from './Components/Read';
import Write from './Components/Write';
function App() {

  return (
    <div className="App">
        <h1>React Appp</h1>
       <BrowserRouter>
        <div>
         <span><Link to='/read'>Read</Link></span>
          <br/>
         <span><Link to='/write'>Write</Link></span>

        </div>
         <Routes>
          <Route  path='/read' element={<Read/>}/>
          <Route  path='/write' element={<Write/>}/>
          <Route  path='/' element={<Write/>}/>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
