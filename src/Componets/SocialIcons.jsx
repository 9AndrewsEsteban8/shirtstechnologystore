import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcon = ({ href, icon,text }) => {
  return (
    <div className='containersocial'>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
    <p>{text}</p>
    </div>
  );
};

export default SocialIcon;