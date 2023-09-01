import React , {useEffect, useState}from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../Constants';
import { logo, menu, close} from '../assets'
/**
 * This includes the topbar items used to navigate between the various sections
 * This defines those items and styles
 * TODO: Visit tailwind.css to understand what those classnames mean
 * @returns 
 */
const Navbar = () => {
  const [active, setActive] = useState(' ')
  const [toggle, setToggle] = useState(false)
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
        {/* Defining page na,e */}
        <p className='text-white text-[18px] font-bold cursor-pointer flex'>
          Emmanuella &nbsp;
          <span className='sm:block hidden'>| Portfolio 
          </span>
        </p>
      </Link> 
      {/* shows a list flex view of nar bar menu */}
      <ul className='list-none sm: flex flex-row gap-10'>
        {navLinks.map((nav) => (
          <li 
          key = {nav.id}
          className= {`${
            active === nav.title
            ? "text-white"
            : "text-secondary"
          } hover:text-white text-[18px]
          font-medium cursor pointe`} 
          onClick={() => setActive(nav.title)}
          >
            <a href = {`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* defines an image for the menu button in case of mobile device */}
      <div className='sm: hidden flex flex-1 justify-end items-center'>
          <img src = {toggle ? close: menu}
            alt="menu" className='w-[28px] h-[28px]
              object-contain cursor-pointer
            ' onClick = {() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden': 'flex'}p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-1-[140px]
          z-10 rounded-x1
          `}>
            <ul className='list-none flex sm: flex justify-end
            items-start flex-col gap-4
            '>
              {/* Maps each navbar item to  the id and title*/}
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${active === nav.title
                      ? "text-white"
                      : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)}
                    }
                >
                  <a href={`${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
      </div>
      <p className='text-red-500'></p>
      </div>
    </nav>
  )
}

export default Navbar