import React from 'react';

if (!document.head.querySelector('#jota-icons')) {
  const iconsLink = document.createElement('link');

  iconsLink.id = 'jota-icons';
  iconsLink.rel = 'stylesheet';
  iconsLink.href = 'https://s3.amazonaws.com/jota-icons.meiuca.design/jota-icons-1.0.0.css';

  document.head.appendChild(iconsLink);
}


