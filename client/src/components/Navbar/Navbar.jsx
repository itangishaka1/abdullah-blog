import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import './Navbar.scss'

const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext)

  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <Link to='/' className='navbar__logo'>I<span className='cycle'>ta<span className='red'>B</span>lo</span>g</Link>
        <div className='navbar__links'>
          <Link  to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link  to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link  to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link  to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link  to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link  to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
         {currentUser ? <span onClick={logout}>Logout</span> : <Link to='/login'>Login</Link>}
          <span className='navbar__write'>
            <Link to='/write'>Write</Link>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
