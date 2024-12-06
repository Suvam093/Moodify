import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <header className='bg-blue-500 text-white py-4 shadow-md'>
            <div className="container mx-auto flex justify-between items-center px-6">
                <h1 className="text-2xl font-bold">
                    Moodify 🎭
                </h1>
                <nav className='flex gap-4'>
                    <NavLink
                        to='/'
                        className={({isActive}) => 
                            isActive ? 'text-orange-400 font-bold' : 'hover: underline'
                        }
                        
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to='/about'
                        className={({isActive}) =>
                            isActive ? 'text-orange-400 font-bold' : 'hover: underline'
                        }
                    >
                        About
                    </NavLink>
                    

                    <NavLink
                        to='/contact'
                        className={({isActive}) =>
                            isActive ? 'text-orange-400 font-bold' : 'hover: underline'
                        }

                    >
                        Contact Us
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

