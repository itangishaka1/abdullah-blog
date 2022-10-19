import './WritePost.scss'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react'
import axios from 'axios'

const WritePost = () => {
  const [value, setValue] = useState('') // description
  const [title, setTitle] = useState('')
  const [img, setImg] = useState(null)
  const [cat, setCat] = useState('')

  const upload = async() => {
    try {
      const formData = new FormData()
      formData.append('file', img)
      const res = await axios.post('http://localhost:5050/api/upload', formData)
      console.log(res.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    upload()
  }
  return (
    <section className='write-post'>
      <div className='write-post__content'>
        <input
          type='text'
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className='write-post__editor-container'>
          <ReactQuill
            className='write-post__editor'
            theme='snow'
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className='write-post__menu'>
        <div className='write-post__menu-item'>
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: 'none' }}
            type='file'
            id='file'
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label className='file' htmlFor='file'>
            Upload Image
          </label>
          <div className='buttons'>
            <button>Save as a draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className='write-post__menu-item'>
          <h1>Category</h1>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='art'
              id='art'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='art'>Art</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='science'
              id='science'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='science'>Science</label>
          </div>

          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='technology'
              id='technology'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='technology'>Technology</label>
          </div>

          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='cinema'
              id='cinema'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='cinema'>Cinema</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='design'
              id='design'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='design'>Design</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='food'
              id='food'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='food'>Food</label>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WritePost
