import React from 'react'
import './Header.css'
const Header = () => {
    return (
    <div className='header'>
        <div className="header-contents">
        <h2>Craving something delicious? Order your favorite food with just a click!</h2>
        <p>
          Explore a diverse menu of mouthwatering dishes, crafted with the finest ingredients and culinary mastery. Indulge in flavors that satisfy your cravings and turn every meal into an unforgettable experience!
        </p>
        <button><a href='#explore-menu'>View Menu</a></button>
        </div>
    </div>
  )
}
export default Header
