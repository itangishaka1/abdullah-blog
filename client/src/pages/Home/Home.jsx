import './Home.scss'
import Post from '../../components/Post/Post'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'


const Home = () => {
  const [posts, setPosts] = useState([])

  const cat = useLocation().search
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5050/api/posts${cat}`)
        setPosts(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [cat])

  return (
    <main className='home'>
      <div className="home__posts">
        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </main>
  )
}

export default Home