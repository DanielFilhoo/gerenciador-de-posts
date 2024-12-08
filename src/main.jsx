import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter,RouterProvider, Route } from 'react-router-dom'

//Paginas
import Home from './routes/Home';
import NewPost from './routes/NewPost';
import Post from './routes/Post'
import Admin from './routes/Admin'
import EditPost from './routes/EditPost'


const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
      path: "/",
      element: <Home/>,
      },
      {
        path: "/new",
        element: <NewPost/>,
      },
      {
        path:"/posts/:id",
        element: <Post/>,
      },
      {
        path:"/admin",
        element: <Admin/>,
      },
      {
        path:"/posts/edit/:id",
        element: <EditPost/>,
        
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
