import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Register from './pages/Register'
import SinglePost from './pages/SinglePost/SinglePost'
import WritePost from './pages/WritePost'
import Login from './pages/Login/Login'
import Layout from './components/Layout/Layout'

import './App.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post/:id',
        element: <SinglePost />,
      },
      {
        path: '/write',
        element: <WritePost />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

function App() {
  return (
    <div className='App'>
      <div className='App__container'>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
