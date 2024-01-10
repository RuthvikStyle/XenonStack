import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Main from './Pages/Main';

function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element ={<Main/>}></Route>
      <Route path='/login' element ={<Login/>}></Route>
      <Route path='/contact' element ={<Contact/>}></Route>
    </Routes>
   </div>
  );
}

export default App;