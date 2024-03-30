import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();
    const test = () => {
        navigate('/');
    }

  return (
    <div style={{display:'flex', }}>
        <div style={{flex: 1 }}><Link to="/">Main</Link></div>
        <div style={{flex: 1 }}><Link to="/product">Product</Link></div>
        <button onClick={test}>go home</button>
    </div>
  )
}

export default Header