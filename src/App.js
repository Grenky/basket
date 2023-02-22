import { useState } from 'react';
import './App.css';
import Shop from './components/Shop';
import { FaShoppingCart } from "react-icons/fa";




export default function App() {

  let [open, setOpen] = useState(false)




  return (
    <div className="App">
      <FaShoppingCart onClick={() => setOpen(open = !open)}  className={`basket-btn ${open && 'active'}`} />
      {open && 
      (<div className='basket-box'>
        
      </div>)}
      <Shop />
    </div>
  );
}


