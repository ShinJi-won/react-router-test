import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

function Product() {
    const { productId, name } = useParams();
    const { search } = useLocation();

  return (
    <div>Product: {productId}, {name}, {search} </div>
  )
}

export default Product