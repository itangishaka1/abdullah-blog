import { Link } from 'react-router-dom'
import './Login.scss'

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input type='text' placeholder="username" />
        <input type='password' placeholder="password" />
        <button>Login</button>
        <p>This is an error</p>
        <span>Don't have account? <Link to='/register'>Register</Link></span>
      </form>
    </div>
  )
}

export default Login