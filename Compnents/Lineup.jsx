import React from 'react'
import artists from './Data/Artists'

function Lineup() {
  return (
    <section className='bg-myLight py-16 px-8'>
      <h2 className='text-5xl font-headline text-center text-myPurple mb-10 tracking-wide'>Festival Lineup</h2>

      <div className='grid grid-cols-3 gap-8 max-7xl mx-auto'>
            {artists.map((artists, id) => (
                <div key={id} className='group relative overflow-hidden rounded-lg shadow-lg '>
                    <img src={artists.image} 
                    alt={artists.name}
                    className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300'
                    />
                    <div className='absolute inset-0 bg-myDark bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <h3 className='text-2xl font-headline text-myGold mb-2'>{artists.name}</h3>
                    <p className='text-myLight font-body'>{artists.talent}</p>
                    <p className='text-myGreen font-body'>{artists.band}</p>
                </div>
                </div>

                
            ))} 
      </div>
    </section>
  )
}

export default Lineup
