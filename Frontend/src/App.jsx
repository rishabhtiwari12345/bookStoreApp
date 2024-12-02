import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Courses from './coureses/Courses';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <div className="dark:bg-slate-900 dark:text-white">
        {' '}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/course" element={<Courses></Courses>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
