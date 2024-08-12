import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import UserTable from './UserTable';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div>
      <Toaster></Toaster>
       <UserTable/>
    </div>
  )
}

export default App
