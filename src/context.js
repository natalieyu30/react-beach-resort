import React, { Component, useContext } from 'react';
// import items from './data';
import Client from './Contentful';


const RoomContext = React.createContext();
// <RoomContext.Provider value={} /> 

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all', 
    capacity: 1, 
    price: 0,
    minPrice: 0,
    maxPrice: 0, 
    minSize:0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  // getData
  getData = async () => {
    try {
      let response = await Client.getEntries({content_type: 'beachResort'});
      let rooms = this.formatData(response.items)
      let featuredRooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));
      this.setState({
        rooms, featuredRooms, sortedRooms: rooms, loading:false, price:maxPrice, maxPrice, maxSize
      })
      this.state.rooms = rooms;
    } catch(err) {
      console.log(err)
    }
  }
  

  componentDidMount() {
    this.getData();
    
  }
  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = {...item.fields, id, images}
      return room;
    })
    return tempItems;
  }
  handleChange = e => {
    const name = e.target.name
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({[name]:value}, this.filterRooms)
  }
  filterRooms =() => {
    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets} = this.state;
    let tempRooms = [...rooms];
    capacity = parseInt(capacity);
    price = parseInt(price);

    if (type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type)
    }
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    tempRooms = tempRooms.filter(room => room.price <= price);
    tempRooms = tempRooms.filter(room => room.size <= maxSize && room.size > minSize);
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true)
    }
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true)
    }

    this.setState({sortedRooms: tempRooms})

  }
  render() {
    return (
      <RoomContext.Provider value={{...this.state, handleChange: this.handleChange}}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

// const RoomConsumer = RoomContext.Consumer();
export const useGlobalContext = () => {
  return useContext(RoomContext)
}

export {RoomProvider, RoomContext}