import React, { useState } from 'react'
import { faker } from '@faker-js/faker';
import Card from './Card';
faker.seed(100);
function Home() {
  const productArray = [...Array(20)].map(() =>(
    {
      id: faker.string.uuid(),
      name:faker.commerce.productName(),
      price:faker.commerce.price(),
      image:faker.image.url(),
      desc:faker.commerce.productDescription()
    }
  ));

  return (
    
     <div className=' items-center justify-evenly flex-wrap  flex'>
      {
        productArray.map((item,id) => (
        <Card item={item} key={id}  />
        ))
      }
     </div>
 
  )
}

export default Home
