import React, { useContext } from 'react'
import AuthContext from '../../hooks/AuthContext'

export default function SecondPage() {

  const {phone, setPhone} = useContext(AuthContext)

  return (
    <div>
        <input value={phone} onChange={(e) => setPhone(e.target.value)}  />
    </div>
  )
}
