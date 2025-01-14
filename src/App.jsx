import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layouts/LayoutOne/LayoutOne'
import HomePage from './Pages/HomePage'
import NotFound from './Components/NotFound/NotFound'
import CatagoryPage from './Pages/Shop'
import Shop from './Pages/Shop'
import CartPage from './Pages/CartPage'
import Contact from './Components/Contact/Contact'
import SignUp from './Components/Sign Up/SignUp'
import LogIn from './Components/LogIn/LogIn'
import LayoutTwo from './Layouts/LayoutTwo/LayoutTwo'
import app from './Firebase.config'
import { ToastContainer, toast } from 'react-toastify';
import ProductDetailsPage from './Pages/ProductDetailsPage'
import Bill from './Components/Bill/Bill'
import CheckOut from './Pages/CheckOut'



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
          <Route path='/productdetail' element={<ProductDetailsPage/>} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/checkout' element={<CheckOut/>} />
          <Route path='*' element={<NotFound/>} />
        </Route>
        {/* ------------------LayoutOne---------------------- */}
        <Route path='/register' element={<LayoutTwo/>} >
          <Route path='/register/LogIn' element={<LogIn/>} />
          <Route path='/register/SignUp' element={<SignUp/>} />

        </Route>

      </Route>
    )
  )

  return (
    <>
       <RouterProvider router={myPath} />
       <ToastContainer />
    </>
  )
}

export default App
