import React, { useState } from 'react'
import festivalScheudle from './Data/FestivalSchedule'
import scheduleBG from '/public/image/Vibe Photos/vibeBG.png'


function Schedule() {

    const [openDay, setOpenDay] = useState(null);

    const toggleDay = (index) => {
        setOpenDay(openDay === index ? null : index)
    }

  return (
    <section className='relative py-20 px-8 bg-myLight'>
        {/* BACKGROUND IMAGE */}
      <img src="/public/image/Vibe Photos/vibeBG.png" 
      alt="Logo image" 
      className='absolute inset-0 w-full h-full object-cover opcity-20'
      />


{/* OVERLAY */}
    <div className='absolute inset-0 bg-myDark opacity-30 '>

    </div>

    <div className='relative z-10 max-w-6xl mx-auto'>
        <h2 className='text-5xl font-headline text-center text-myPurple mb-12 tracking-wide'>Festival Schedule</h2>
        <div className='space-y-6'>
            {festivalScheudle.map((day,id) => (
                <div key={id} onClick={() => toggleDay(id)} className='bg-myLight rounded-lg shadow-lg overflow-hidden'>
                    <button className='w-full text-left px-6 py-4 bg-myPurple text-myLightg font-semibold text-xl flex justify-between items-cemter hover:bg-myGold hover:text-myDark transition-colors duration-200'>
                        {day.day}
                              <span>{openDay === id ? "-" : "+" }</span>
   
                    </button>

                    {openDay === id && (
                        <ul>
                         {day.events.map((event,id) => (
                            <li key={id} className='flex justify-between items-center border-b pb-4'>
                                <p className='font-body text-myDark text-bold mx-10'>{event.time}</p>
                                <p className='font-headline text-myPurple'>{event.artist}</p>
                                <p className='font-body text-myGreen mx-10'>{event.stage}</p>
                            </li>
                         ))}   
                        </ul>
                    )}
                </div>
            ))}
        </div>
    </div>
    </section>
  )
}

export default Schedule
