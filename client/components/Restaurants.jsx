import React, { useState, useEffect } from 'react';
import Restaurant from './Restaurant.jsx';

const Restaurants = (props) => {

  const restaurants = props.restaurants.map((el) => {
    return <Restaurant name = {el.name} address = {el.address} hours = {el.hours} />
  })
  return (
    <div>
      <div className = "cardContainer">
        {restaurants}
      </div>
    </div>
  )
}

export default Restaurants;