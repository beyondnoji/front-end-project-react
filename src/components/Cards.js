import React from 'react'
import CardItem from './CardItem';
import './Cards.css'; 

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations</h1>
      <div className='cards__container'> 
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep
              inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />

            <CardItem 
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem 
              src='images/img-6.jpg'
              text="Experience the hustle 'n' bustle of City Life" 
              label='Urban'
              path='/services'
            />

            <CardItem 
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />

            <CardItem 
              src='images/img-1.jpg'
              text='Trek the Himalayan Mountains and behold Unseen Sights'
              label='Adventure'
              path='/services'
            />
          </ul>
        </div>
       </div>
    </div>
  )
}

export default Cards;
