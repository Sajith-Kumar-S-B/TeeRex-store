import React from 'react'
import {Routes,Route} from "react-router-dom"
import Cart from '../components/Cart'
import Wishlist from '../components/Wishlist'
import ProductList from '../components/ProductList'
import Lander from '../components/Lander'

export default function AllRoutes() {
  return (
    <>
    <Routes>
     <Route path='/' element={
    <> 

<Lander/>
    <ProductList/>
    
    </>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/wishlist' element={<Wishlist/>}/>

    </Routes>
    </>
  )
}
