import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layouts/LayoutOne/LayoutOne'
import HomePage from './Pages/HomePage'

function App() {
  const myPath = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* ------------------LayoutOne---------------------- */}
        <Route path='/' element={<LayoutOne/>} >
          <Route index element={<HomePage/>} />
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
