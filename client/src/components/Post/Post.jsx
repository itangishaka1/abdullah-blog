import './Post.scss'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  return (
    <article className='post'>
        <div className="post__img">
            <img src={post.img} alt={post.title} />
        </div>
        <div className="post__content">
            <Link to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
            </Link>
                <p>{post.desc}</p>
                <button>Read More...</button>
        </div>
    </article>
  )
}

export default Post