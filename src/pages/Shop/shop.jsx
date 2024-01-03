import React from 'react'

import { About, Advertisement, Contact, Order, Show, Title } from './container';
import './shop.css';

export const Shop = () => {
  return (
  <> 
  <div className='body'> 
    <Advertisement />
    <Title />
    <Show />
    <About />
    <Order />
    <Contact />
  </div>
  </>
  )
}
