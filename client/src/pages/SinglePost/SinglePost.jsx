import './SinglePost.scss'
import { Link } from 'react-router-dom'

import { MdModeEditOutline, MdDelete } from 'react-icons/md'
import { GrEdit } from 'react-icons/gr'
import Menu from '../../components/Menu/Menu'

const SinglePost = () => {
  return (
    <section className='single-post'>
      <div className='single-post__content'>
        <img
          src='https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
          alt=''
        />
        <div className='single-post__user'>
          <img
            src='https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
            alt=''
          />

          <div className='single-post__info'>
            <span>Abdullah</span>
            <p>Posted 2 days ago</p>
          </div>
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
        </div>
        <h1  className='single-post__title'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </h1>
        <p className='single-post__desc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          fuga, consequuntur earum, esse ab unde voluptate eveniet deserunt
          minus pariatur possimus, eligendi atque? Commodi modi obcaecati quo
          quibusdam est! Laudantium vero omnis nobis autem aut dolores iusto
          atque tenetur cumque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, hic.

          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid error, blanditiis nesciunt ullam nam pariatur non praesentium eligendi quas provident obcaecati tempore, ipsum, sunt molestias nostrum quia delectus et tempora officia velit corrupti! Mollitia nihil hic earum expedita quis ut impedit? Eius assumenda suscipit vero voluptatibus dolores magni possimus voluptatum voluptate, odit corporis magnam perspiciatis impedit fugit exercitationem molestiae, voluptas rerum vitae! Quam id blanditiis ex dolorem molestias dolore nihil excepturi voluptatem sit, illo commodi eligendi maxime aspernatur animi hic? Esse ipsam, ducimus iure blanditiis asperiores repellat deserunt accusamus, sequi cum consectetur id ut praesentium delectus earum impedit expedita vero.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          fuga, consequuntur earum, esse ab unde voluptate eveniet deserunt
          minus pariatur possimus, eligendi atque? Commodi modi obcaecati quo
          quibusdam est! Laudantium vero omnis nobis autem aut dolores iusto
          atque tenetur cumque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, hic.

          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid error, blanditiis nesciunt ullam nam pariatur non praesentium eligendi quas provident obcaecati tempore, ipsum, sunt molestias nostrum quia delectus et tempora officia velit corrupti! Mollitia nihil hic earum expedita quis ut impedit? Eius assumenda suscipit vero voluptatibus dolores magni possimus voluptatum voluptate, odit corporis magnam perspiciatis impedit fugit exercitationem molestiae, voluptas rerum vitae! Quam id blanditiis ex dolorem molestias dolore nihil excepturi voluptatem sit, illo commodi eligendi maxime aspernatur animi hic? Esse ipsam, ducimus iure blanditiis asperiores repellat deserunt accusamus, sequi cum consectetur id ut praesentium delectus earum impedit expedita vero.
        </p>
      </div>
      <div className='single-post__menu'>
        <Menu />
      </div>
    </section>
  )
}

export default SinglePost
