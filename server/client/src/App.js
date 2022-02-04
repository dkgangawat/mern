import { useState } from 'react';
import './App.css';
import Header from './componets/Header';
import Card from './componets/Card';
import Api from "./componets/Api";
import { Route, Routes } from "react-router-dom"
import Testt from "./Testt"
import Login from './componets/Login';
import Register from './componets/register';
function App() {
  // eslint-disable-next-line
  const [ApiData, setApiData] = useState(Api);

  return (
    <>  <div className='container'>
      <Header />
    
      <Routes>
        <Route path="/" element={<Card ApiData={ApiData} />} />
        <Route path="/about" element={<Testt />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </div>
    </>

  );
}

export default App;
