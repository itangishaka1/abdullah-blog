import './Home.scss'
import Post from '../../components/Post/Post'


const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, debitis.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rerum quisquam id nesciunt adipisci ullam laudantium facilis doloremque aliquam officiis.",
      img: "https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, debitis.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rerum quisquam id nesciunt adipisci ullam laudantium facilis doloremque aliquam officiis.",
      img: "https://images.unsplash.com/photo-1576179635662-9d1983e97e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, debitis.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rerum quisquam id nesciunt adipisci ullam laudantium facilis doloremque aliquam officiis.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, debitis.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rerum quisquam id nesciunt adipisci ullam laudantium facilis doloremque aliquam officiis.",
      img: "https://images.unsplash.com/photo-1629838090959-4bb0370016ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, debitis.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rerum quisquam id nesciunt adipisci ullam laudantium facilis doloremque aliquam officiis.",
      img: "https://images.unsplash.com/photo-1569396327972-6231a5b05ea8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80"
    },
  ]
  


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