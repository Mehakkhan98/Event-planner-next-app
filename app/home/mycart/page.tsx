
import React from 'react'

interface Users{
 id:string,
 name:string
}
const UserPage =async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',
        {cache:'no-store'}
    )
    const users:Users[]= await res.json()
  return (
    <>
      <h1 className='font-bold text-2xl text-black'>User Portal</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
      <ul>
      {
        users.map(user=><li key={user.id}>{user.name}</li>)
      }
      </ul>
      
    </>
  )
}

export default UserPage
