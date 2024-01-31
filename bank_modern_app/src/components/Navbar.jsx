import { useState } from 'react'

import { close, logo, menu } from '../assets'

import { navLinks } from '../constants'

const Navbar = () => {
    const [toogle, setToogle] = useState(false); // useState is a hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
    // The only argument to useState is the initial state. In the example above, it is 0 because our counter starts from zero. Note that unlike this.state, the state here does not have to be an object — although it can be if you want. The initial state argument is only used during the first render.
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <img src={logo} alt="hookbank" className='w-[124px] h-[32px]' />

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`font-poppins font-normal cursor-pointer [16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10`}>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>


            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={toogle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToogle((prev) => !prev)} />

            </div>

            <div className={`${toogle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className="list-none flex flex-col justify-end items-center flex-1">
                    {navLinks.map((nav, index) => (
                        <li key={nav.id} className={`font-poppins font-normal cursor-pointer [16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}>
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar