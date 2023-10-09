// Imports
import React from 'react'

// useRedux
import { useSelector } from 'react-redux';

// Functional Components
function Home() {

  // Select (View data in redux)
  const username = useSelector((state: any) => state.user.value.username)

  // Rendering
  return (
    <div>{username}</div>
  )
}

export default Home