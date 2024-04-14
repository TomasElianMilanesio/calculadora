import React from 'react';
import logoImagen from '../imagenes/logo-calculadora.png';

const Logo = () => (
  <div className='logo-contenedor'>
    <img 
      src={logoImagen}
      className="logo"
      alt="Logo de calculadora"
    />
  </div>
);

export default Logo;
