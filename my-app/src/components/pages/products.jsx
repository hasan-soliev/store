import React, { useContext, useEffect } from 'react'
import AuthContext from '../../hooks/AuthContext'

export default function Products() {
  const {phone,setPhone} = useContext(AuthContext)

  return (
    <div>Products</div>
  )
}
