import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import './Login.scss'

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
 })
 const [error, setError] = useState(null)
 const navigate = useNavigate()

 const handleChange =(e) => {
  setInputs(prev=>({...prev,[e.target.name] : e.target.value}))
 }

 const handleSubmit = async e => {
   e.preventDefault()
   try {
    await axios.post('http://localhost:5050/api/auth/login', inputs)
    navigate('/')
   } catch (error) {
     setError(error.response.data)
   }
 }
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input type='text' placeholder="username" name='username' onChange={handleChange} />
        <input type='password' placeholder="password" name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
        {error && <p>{error}</p>}
        <span>Don't have account? <Link to='/register'>Register</Link></span>
      </form>
    </div>
  )
}

export default Login