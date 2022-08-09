import React from 'react'

const Menu: React.FC = () => {
  return (
    
    <aside className='column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile'> 
        <p className="menu-label is-hidden-touch">
            My Sales
        </p>
         <ul className="menu-list">
            <li>
                <a href="#">
                   <span className="icon"></span> Home
                </a>
                <a href="#">
                   <span className="icon"></span> Register
                </a>
                <a href="#">
                   <span className="icon"></span> Config
                </a>
            </li>
         </ul>    
    </aside>
  )
}

export default Menu