import React from 'react'
import ticketOptions from './Data/TicketOptions'
import ticketBG from '/image/ticketBG.jpg'

function Tickets() {
  return (
    <section>
        {/* BACKGROUND IMAGE */}
      <img src={ticketBG} 
      alt="Festival and Backgruond" />
    
    {/* OVERLAY  */}
    <div></div>
{/* CONTENT */}
<div>
    <h2>Get Your Tickets</h2>
    <div>
        {ticketOptions.map((ticket, id) => (
            <div>
                {Tickets.highlighted && (
                    <span className='text-9xl'>Most Popular</span>
                )}
                <h3>{ticket.type}</h3>
                <p>{ticket.price}</p>

            </div>
        ))}
    </div>
</div>
    </section>
  )}

export default Tickets
