import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

//page components
import AboutMe from './components/about'
import Feat from './components/feat'
import Header from './components/header'
import Home from './components/home'
import Projects from './components/projects'
import Skill from './components/skills'
import Contact from './components/contact'
import Tesst from './components/tesst'
import Notfound from './components/notfound'

const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>,
      errorElement: <Notfound/>
    },
    {
      path:'/about',
      element:<AboutMe/>,
      errorElement: <Notfound/>
    },
    {
      path:'/skills',
      element:<Skill/>,
      errorElement: <Notfound/>
    },
    {
      path:'/feats',
      element:<Feat/>,
      errorElement: <Notfound/>
    },
    {
      path:'/contact',
      element:<Contact/>,
      errorElement: <Notfound/>
    },
    {
      path:'/projects',
      element:<Projects/>,
      errorElement: <Notfound/>
    }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <div className=' pt-3 h-fit md:h-screen md:overflow-hidden  bg-[#fffcf2] dark:bg-[#14202b] text-black dark:text-[rgba(255,255,255,0.87)] ' > 
        <RouterProvider router={router}/>  
    </div>
  </StrictMode>
)
