import React from 'react';
import Title from '../components/Title'; 

import {useGlobalContext} from '../context';

function RoomsFilter({rooms}) {
  const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = useGlobalContext();
  const uniqueValue =['all', ...new Set(rooms.map(item => item.type))] 
  const guests = [...new Set(rooms.map(item => item.capacity))] 
  return (
    <section className='filter-container'>
      <Title title='Search rooms' />
      <form action="" className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Room type</label>
          <select name="type" id="type" value={type} className='form-control' onChange={handleChange}>
            {uniqueValue.map((item, index) => {
              return <option value={item} key={index} >{item}</option>
            })}
          </select>
        </div>
        {/* guest */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select name="capacity" id="capacity" value={capacity} className='form-control' onChange={handleChange}>
            {guests.map((guest, index) => {
              return <option value={guest} key={index} >{guest}</option>
            })}
          </select>
        </div>
        {/* price range */}
        <div className="form-group">
          <label htmlFor="price">Room price $ {price}</label>
          <input type="range" name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} className='form-control'/>
        </div>

        {/* size range */}
        <div className="form-group">
          <label htmlFor="size">Room size</label>
          <div className="size-inputs">
            <input type="number" name="minSize" id="size"  value={minSize} onChange={handleChange} className='size-input'/>
            <input type="number" name="maxSize" id="size"  value={maxSize} onChange={handleChange} className='size-input'/>
          </div>
        </div>

        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name="breakfast" id="breakfast" value={breakfast} onChange={handleChange}/>
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name="pets" id="pets" value={pets} onChange={handleChange}/>
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
      </form>
    </section>
  )
}

export default RoomsFilter
