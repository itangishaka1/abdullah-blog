import { Link } from 'react-router-dom'
import '../pages/Login/Login.scss'

const Register = () => {
  return (
    <div className="login">
      <h1>Register</h1>
      <form>
        <input required type='text' placeholder="username" />
        <input required type='email' placeholder="email" />
        <input required type='password' placeholder="password" />
        <button>Login</button>
        <p>This is an error</p>
        <span>Have account? <Link to='/login'>Login</Link></span>
      </form>
    </div>
  )
}

export default Register