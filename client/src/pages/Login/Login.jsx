import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
// import axios from 'axios'
import './Login.scss'
import { AuthContext } from '../../context/authContext'

const Login = () => {
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
 })
 const [error, setError] = useState(null)

 const { login } = useContext(AuthContext)
//  console.log(currentUser)

 const handleChange =(e) => {
  setInputs(prev=>({...prev,[e.target.name] : e.target.value}))
 }

 const handleSubmit = async e => {
   e.preventDefault()
   try {
    // await axios.post('http://localhost:5050/api/auth/login', inputs) // moved this in context folder
   await login(inputs)
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