import React, {  useContext, useState,useEffect } from 'react'
import Card from './Card'
import { cartContext } from '../contextApi/Context'
function CartPage({}) {
   
  const {cart} = useContext(cartContext)
  const[total, setTotal] = useState('')
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
   <div>
   <div className='flex items-center justify-end m-3'>
  <div className='w-56 h-20 bg-teal-700 font-bold text-white flex justify-center items-center rounded-lg'> 
  <span className=''>Total Cost : {total}</span>
  </div>
  </div>
   <div className=' items-center justify-evenly flex-wrap  flex'>
   {
     cart.map((item,id) => (
     <Card item={item} key={id}  />
     ))
   }
  </div>
  
   </div>
  )
}

export default CartPage
