import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import { ListEmployee } from './Component/ListEmployee';
import { Employee } from './Component/Employee';

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListEmployee />}></Route>
          <Route path='/addemployee' element={<Employee />}></Route>   
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
