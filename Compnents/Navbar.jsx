import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className='bg-myPurple text-myLight py-4 shadow-lg'>
        <div className='max-w-7xl mx-auto flex justify-between items-center px-8'>
            {/* logo */}
            <h1 className='text-7xl font-headline tracking-wide '>SWATFEST</h1>
        {/* Nav links */}
            <ul className='flex space-x-10 text-lg font-body'>
                <li > <a href="#lineup" className='hover:text-myGold transition duration-200'>Lineup</a></li>
                <li><a href="#ticket" className='hover:text-myGold transition duration-200'>Tickets</a></li>
                <li><a href="#gallery"className='hover:text-myGold transition duration-200' >Gallery</a></li>
                <li><a href="#contact"className='hover:text-myGold transition duration-200' >Contact</a></li>
            </ul>
        </div>
        </nav>
    
      
    </div>
  )
}

export default Navbar 

