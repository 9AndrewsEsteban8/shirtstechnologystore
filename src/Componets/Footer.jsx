import React from 'react'
import {faWhatsapp,faFacebook, faInstagram, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import SocialIcon from './SocialIcons'




const Footer = () => {
  return (
    <div className='container_footer'>
      <div>
        <ul>
          <h3>Información</h3>
          <li>Envios</li>
          <li>Tienda</li>
          <li>Politicas de devolución</li>
          <li>Politicas de privacidad</li>
        </ul>
      </div>

      <div className='whatsapp'>
        <ul>
          <h3>Contactanos</h3>
          <li><SocialIcon
          icon={faWhatsapp}/>+57301331557</li>
          <li><SocialIcon
          icon={faWhatsapp}/>+573134020890</li>
        </ul>
      </div>

      <div>
        <ul>
          <h3>Acerca de</h3>
          <li>
            Pedidos en todo el mundo
          </li>
          <li>
            Tiempos de envio
          </li>
        </ul>
      </div>

      <div className='socialnetworks_footer'>
        <SocialIcon
          href={'https://www.facebook.com/?locale=es_LA'}
          icon={faFacebook} />
        <SocialIcon
          href={'https://www.instagram.com/'}
          icon={faInstagram} />
        <SocialIcon
          href={'https://www.instagram.com/'}
          icon={faLinkedin} />
        <SocialIcon
          href={'https://www.instagram.com/'}
          icon={faTiktok} />
        <SocialIcon
          href={'https://www.instagram.com/'}
          icon={faYoutube} />
      </div>
      <div className="developers">
        Desarrollador por: <a href='https://www.linkedin.com/in/andrewsesteban/'>@AndrewsEsteban</a> And <a href='https://www.linkedin.com/in/sergio-danilo-sabogal-quintin-83825820a/'>@SergioS</a>
      </div>
    <p>All rights reserved ©2024</p>
    </div>

  )
}

export default Footer
