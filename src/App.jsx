import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layouts/LayoutOne/LayoutOne'
import HomePage from './Pages/HomePage'
import NotFound from './Components/NotFound/NotFound'
import CatagoryPage from './Pages/Shop'
import Shop from './Pages/Shop'
import CartPage from './Pages/CartPage'
import Contact from './Components/Contact/Contact'
import SignIn from './Components/Sign In/SignIn'
import SignUp from './Components/Sign Up/SignUp'

function App() {
  const myPath = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* ------------------LayoutOne---------------------- */}
        <Route path='/' element={<LayoutOne/>} >
          <Route index element={<HomePage/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/SignIn' element={<SignIn/>} />
          <Route path='/SignUp' element={<SignUp/>} />
          <Route path='*' element={<NotFound/>} />
        </Route>

      </Route>
    )
  )

  return (
    <>
       <RouterProvider router={myPath} />
    </>
  )
}

export default App
