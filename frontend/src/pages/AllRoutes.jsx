import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'
import About from './About'
import Contact from './Contact'
import Reviews from './Reviews'
import DealersPage from './DealersPage'
import UsersPage from './UsersPage'
import Register from './Register'
import AddCar from './AddCar'
import PrivateRoutes from '../components/PrivateRoutes'
import CongratulationsPage from './CongratulationsPage'
import Cart from './Cart'
const AllRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/reviews' element={<Reviews/>} />
        <Route path='/dealers' element={
        <PrivateRoutes>
        <DealersPage/>
        </PrivateRoutes>
        } />
        <Route path='/add-cart' element={<Cart/>} />
        <Route path='/delivered' element={<CongratulationsPage/>}></Route>
        <Route path='/users-car' element={<UsersPage/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/add-car' element={<AddCar/>} />
    </Routes>
  )
}

export default AllRoutes