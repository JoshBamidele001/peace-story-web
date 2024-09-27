import React from 'react'
import Prose from '../Genre and Categories/Prose'
import Drama from '../Genre and Categories/Drama'
import Poetry from '../Genre and Categories/Poetry'

export default function Read() {
  return (
    <div className='pt-24'>
      
      
      <Prose/>
      <div className='bg-white'>
                <Drama/>
        </div>
              <Poetry/>
      
      </div>
  )
}
