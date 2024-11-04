import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Faq from './components/Faq/Faq'
import Layout from './Layout'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Tes from './components/Tes/Tes'
import About from './components/About/About'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import CoursesCard from './components/common/Bencard/CoursesCard'
import CoursesPage from './components/CoursesPage/CoursesPage'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home />}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/CoursesCard' element={<CoursesCard/>}/>
      <Route path='/CoursesPage' element={<CoursesPage/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
