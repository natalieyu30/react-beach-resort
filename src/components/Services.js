import React from 'react';
import Title from './Title';

function Services() {
  const state = {
    services: [
      {
        icon: <i className="fas fa-cocktail"/>, 
        title:'Free Cocktails', 
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officiis.'
      },
      {
        icon: <i className="fas fa-hiking"/>, 
        title:'Endless Hiking', 
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officiis.'
      },
      {
        icon: <i className="fas fa-shuttle-van"/>, 
        title:'Free Shuttle', 
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officiis.'
      },
      {
        icon: <i className="fas fa-beer"/>, 
        title:'Strongest Beer', 
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officiis.'
      },
    ]
  }
  return (
    <section className='services'>
      <Title title='services'/>
      <div className="services-center">
        {state.services.map((item, index) => {
          return <article key={index} className='service'>
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
        })}
      </div>
    </section>
  )
}


export default Services
