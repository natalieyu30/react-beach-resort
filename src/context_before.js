import React, { useState, useEffect, useContext } from 'react';
// import items from './data';
import Client from './Contentful';

// Client.getEntries({
//   content_type: 'beachResort'
// }).then(response => console.log(response.items))

const RoomContext = React.createContext();
// Provider, Consumber

function RoomProvider({children}) {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // getData;
  const fetchData = async() => {
    try {
      let response = await Client.getEntries({content_type: 'beachResort'})
      let tempItems = await response.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(img => img.fields.file.url)
        let room = {...item.fields, images, id}
        return room
      })
      setRooms(tempItems);
      setSortedRooms(tempItems);
      setLoading(false)
    } catch(error) {
      console.log(error)
    }
  }

  const loadRooms= () => {
    setLoading(true);
    fetchData();
    // let tempItems = items.map(item => {
    //   let id = item.sys.id;
    //   let images = item.fields.images.map(img => img.fields.file.url)
    //   let room = {...item.fields, images, id}
    //   return room
    // })
    
    // setRooms(tempItems);
    // setSortedRooms(tempItems);
    // setFilter({...filter, maxPrice, maxSize})
    // setLoading(false)
  }
  const featuredRooms = rooms.filter(room=> room.featured === true)

  let prices = rooms.map(item => item.price)
  const maxPrice = Math.max(...prices)
  // console.log(maxPrice)
  
  useEffect(() => {
    loadRooms(); 
  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    // const value = e.target.value;
    const value = e.target.type === 'checkbox'? e.target.checked : e.target.value;
    // console.log(e.target, name, value)
    filterRooms(name, value)
  }

  const filterRooms = (name, value) => {
    let tempRooms = [...rooms];
    if (name === 'type' && value !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === value);
      setSortedRooms(tempRooms)
    } 
    if (name === 'capacity' && value !== '1') {
      // value = parseInt(value)
      tempRooms = sortedRooms.filter(room => room.capacity >= value);
      setSortedRooms(tempRooms)
    }
    if (name === 'price') {
      tempRooms = rooms.filter(room => room.price <= value);
      setSortedRooms(tempRooms)
    }
    if (name === 'breakfast' && value === true) {
      tempRooms = rooms.filter(room =>  room.breakfast === true);
      setSortedRooms(tempRooms)
    }
    if (name === 'pets' && value === true) {
      tempRooms = rooms.filter(room =>  room.pets === true);
      setSortedRooms(tempRooms)
    }
    setSortedRooms(tempRooms)
  }

  return (
    <RoomContext.Provider value={{rooms, featuredRooms, sortedRooms, loading, handleChange, filterRooms, maxPrice}}>
      {children}
    </RoomContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(RoomContext)
}
export { RoomContext, RoomProvider }
