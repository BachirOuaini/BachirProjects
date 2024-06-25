import './App.css';
import Home from './Home.js';
import Submitform from './submitform.js';
import Edit from './edit.js';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';

function App(){  
return(
  <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/> 
      <Route path='/submitform' element={<Submitform/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
    </Routes>
  </Router>
);}
export default App;