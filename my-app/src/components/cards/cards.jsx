import React from 'react'
import Card from '../card/card'
import './cards.css'

export default function Cards({cart,setCart,products,setProducts,addToCart,}) {

  return (
    <div className='cards'>
      {
        products.map((product, index) => (
          <Card key={product.id} addToCart={addToCart} product={product} />
        ))
      }
    </div>
  )
}
