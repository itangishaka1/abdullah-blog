import './SinglePost.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { MdDelete } from 'react-icons/md'
import { GrEdit } from 'react-icons/gr'
import Menu from '../../components/Menu/Menu'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../../context/authContext'

const SinglePost = () => {
  const [post, setPost] = useState({})

  const location = useLocation()

  const postId = location.pathname.split('/')[2]

  const { currentUser } = useContext(AuthContext)

  const navigate = useLocation()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5050/api/posts/${postId}`)
        setPost(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [postId])

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5050/api/posts/${postId}`)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  if (!post) return <p>Loading...</p>

  return (
    <section className='single-post'>
      <div className='single-post__content'>
        <img src={post?.img} alt='' />
        <div className='single-post__user'>
          {post.userImg && <img src={post.userImg} alt='' />}

          <div className='single-post__info'>
            <span>{post.title}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className='single-post__edit'>
              <div className='single-post__icons'>
                <Link
                  to={`/write?edit=2`}
                  className='single-post__icon-container single-post__icon-container--green'
                >
                  <GrEdit className='single-post__icon' />
                </Link>
                <div className='single-post__icon-container single-post__icon-container--red'>
                  <MdDelete className='single-post__icon' onClick={handleDelete} />
                </div>
              </div>
            </div>
          )}
        </div>
        <h1 className='single-post__title'>{post.title}</h1>
        {post.desc}
      </div>
      <div className='single-post__menu'>
        <Menu cat={post.cat} />
      </div>
    </section>
  )
}

export default SinglePost
