import React , {useEffect, useState}from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../Constants';
import { logo, menu, close} from '../assets'
/**
 * This includes the topbar items used to navigate between the various sections
 * TODO: Visit tailwind.css to understand what those classnames mean
 * @returns 
 */
const Navbar = () => {
  const [active, setActive] = useState(' ')
  return (
    <nav 

      className = 
      // references a horizontal padding from the styles.js file
       {`
        ${styles.paddingX} w-full flex items-center py-5 fixed top-0
        z-20 bg-primary
      `}
      
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
      <Link
        to = "/"
        className='flex items-center gap-2'
        onClick={() => 
          {
            setActive("");
            // scrolls to the top of the page and corner
            window.scrollTo(0, 0)
          }
        }
      >
        {/* update the logo to a different letter or logo
          visit logo.com, enter your name, choose color pallete,
          choose type of logo, and tywith icons or without
           and get a free logo.
           The logo can also be used in the favicon in index.html by adding a link tag that links toi the logo whereever
            it is in your dir path
           Then u can also change the title of ur site in index.html
        */}
        <img src = {logo} alt = {logo} className = "w-9 h-9 object-contain"
        />
      </Link>
      </div>
    </nav>
  )
}

export default Navbar