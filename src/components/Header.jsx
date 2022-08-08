import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h2>F23 Demo</h2>
        <div>
            <Link to="/">
                <button className='nav-btn'>Home</button>
            </Link>
            <Link to="/tasks">
                <button className='nav-btn'>tasks</button>
            </Link>
            <Link to="/team">
                <button className='nav-btn'>team</button>
            </Link>
        </div>
    </header>
  )
}

export default Header
