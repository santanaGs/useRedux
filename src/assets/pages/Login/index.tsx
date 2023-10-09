// Imports
import React, { useState } from 'react'

// useRedux
import { login, logout } from '../../../store'
import { useDispatch, useSelector } from 'react-redux';

// Navigate
import { useNavigate } from 'react-router-dom'


// Functional Components
function Login() {
  // Variables
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [age, setAge] = useState<number>(0);

  // Dispatch
  const dispatch = useDispatch();

  // Select (View data in redux)
  const username = useSelector((state: any) => state.user.value.username)
  const useremail = useSelector((state: any) => state.user.value.email)

  // Navigate
  const navigate = useNavigate();

  // Redering
  return (
    <>
      <div>Olá, {username}</div>
      <div>Email, {useremail}</div>
      <input type="text" placeholder='Nome' onChange={(event) => { setName(event.target.value) }} />
      <input type="text" placeholder='Email' onChange={(event) => { setEmail(event.target.value) }} />
      <input type="number" placeholder='Idade' onChange={(event) => { setAge(event.target.value) }} />
      <button onClick={() => {dispatch(login({username: name,email: email,age: age})), navigate('/')}}
        >
        Submit Login
      </button>
      <button onClick={() => {dispatch(logout())}}>Logout</button>
    </>
  )
}

export default Login