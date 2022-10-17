import './SinglePost.scss'
import { Link, useLocation } from 'react-router-dom'

import {MdDelete } from 'react-icons/md'
import { GrEdit } from 'react-icons/gr'
import Menu from '../../components/Menu/Menu'
import { useEffect, useState , useContext} from 'react'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../../context/authContext'

const SinglePost = () => {
  const [post, setPost] = useState({})

  const location = useLocation()

  const postId = location.pathname.split('/')[2]

  const { currentUser } = useContext(AuthContext)
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

  return (
    <section className='single-post'>
      <div className='single-post__content'>
        <img src={post?.img} alt='' />
        <div className='single-post__user'>
          <img
            src='https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
            alt=''
          />

          <div className='single-post__info'>
            <span>{post.username}</span>
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
                  <MdDelete className='single-post__icon' />
                </div>
              </div>
            </div>
          )}
        </div>
        <h1 className='single-post__title'>{post.title}</h1>
        {post.desc}
      </div>
      <div className='single-post__menu'>
        <Menu />
      </div>
    </section>
  )
}

export default SinglePost
