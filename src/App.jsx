import React from  'react';
import {  BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Results from './pages/Results';
import SignupLogin from './pages/SignupPage';
import Lesson from './pages/Lesson';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>

        <Routes>
          <Route path='/register' element={<SignupLogin/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/lesson' element={<Lesson/>}/>
          <Route path='/results' element={<Results/>}/>
        </Routes>
        
      </Router>
    </>
  )
}

export default App
