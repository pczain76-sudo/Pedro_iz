import React from 'react'
import { Link , NavLink } from 'react-router-dom';
import {useState} from 'react'


export default function Header() {

    const [open, setOpen] = useState(false);


    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
                    <Link to="/" className="flex items-center ">
                        <img 
                            src="1.png"
                            className="mr-3 h-20 w-20"
                            alt="Logo"
                        />
                    </Link>
                       <button
onClick={()=>setOpen(!open)}
className="lg:hidden text-3xl"
>
☰
</button>
                    <div className=" hidden lg:flex items-center lg:order-2">
                       
                        <Link
                            to="/contact"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Contact Us For Order
                        </Link>
                    </div>
                    <div
                   
className={`
${open ? "block" : "hidden"}
lg:block
`
}
 id="mobile-menu-2"
>
                       
                    
                        <ul className="
flex
flex-col
lg:flex-row
gap-6
mt-5
lg:mt-0
font-medium">
                            <li>
                                <NavLink
                                to="/"
                                onClick={()=>setOpen(false)}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 text-2xl ${isActive ? 'text-orange-700':'text-blue-500'}
                                     border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/about'
                                onClick={()=>setOpen(false)}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 text-2xl ${isActive ? 'text-orange-700':'text-blue-500'}
                                     border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/contact'
                                onClick={()=>setOpen(false)}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 text-2xl ${isActive ? 'text-orange-700':'text-blue-500'}
                                     border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            
                             <li>
                                <NavLink
                                to='/products'
                                onClick={()=>setOpen(false)}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 text-2xl ${isActive ? 'text-orange-700':'text-blue-500'}
                                     border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Products
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

