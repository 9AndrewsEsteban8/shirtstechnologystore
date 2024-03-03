import React from 'react'
import men from '../img/men.png'
import kit from '../img/kit.png'

const Nuestros = () => {
  return (
   <> 
  <h3 className='title-red'>NUESTROS PRODUCTOS</h3>
    <div className='containerrombos'>
      <div className='romborojo'>
        <img src={kit} alt="men" />
      </div>
      <div className='romboamarillo'>
      <img src={men} alt="kit" />
      </div>
    </div>
    </>
  )
}

export default Nuestros