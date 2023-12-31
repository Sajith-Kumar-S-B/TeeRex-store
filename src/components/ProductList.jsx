import React, { useEffect, useState ,useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Nav,Navbar,Container,Badge} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import {useNavigate} from "react-router-dom"
import { get_product_request, product_filter, product_search } from '../Redux/ProductConstant';
import "../Styles/styles.css"
import SingleProductCard from './SingleProductCard'
import { Context } from '../Context/contextProvider'
import Lander from './Lander'
export default function ProductList() {
       const dispatch= useDispatch();
      const navigate= useNavigate();
      const {cartData} = useSelector((store)=>store.CartReducer)
      const {wishlistData} = useSelector((store)=>store.WishlistReducer)

       const {fetchedData,filterData,loading,error}= useSelector((store)=>store.productReducer);
        const mappingData= filterData.length?filterData:fetchedData
       const [selectedCategory,setSelectedCategory]=useState([]);

       const { search, setSearch } = useContext(Context);
    console.log(search);

   

             
   

         useEffect(()=>{
            
            dispatch(product_filter(selectedCategory))
         },[selectedCategory])

       useEffect(()=>{
        dispatch(get_product_request())
       },[])
  return (
    <>
    
     <Navbar expand="lg" className="bg-body-tertiary position-fixed top-0 w-100 mb-5 z-1">
    <Container>
      <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><i class="fa-solid fa-shirt fa-bounce"></i>{' '}
      TeeRex Store</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border rounded'><Link className='d-flex justify-content-center align-items-center' to={'/wishlist'} style={{textDecoration:'none',color:'black'}}><i className="fa-solid fa-heart me-2" style={{color: "#FF5733"}}></i>
          Wishlist <span>{wishlistData.length?wishlistData.length:""}</span>
          <Badge className='ms-2 rounded bg-secondary' ></Badge></Link></Nav.Link>
          <Nav.Link className='btn border rounded ms-3'><Link className='d-flex justify-content-center align-items-center' to={'/cart'} style={{textDecoration:'none',color:'black'}}><i className="fa-solid fa-cart-shopping me-2" style={{color: "#C70039"}}></i>
          Cart <span>{cartData.length?cartData.length:""}</span>
          <Badge className='ms-2 rounded' bg="secondary"></Badge></Link></Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Lander/>
      <div className="contentDiv">
     
        <div className='product_list_div'>
            {
                loading?<img className='loaderImg' src='https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif'/> : error? <img className='loaderImg' src='https://cdn.dribbble.com/users/2573223/screenshots/7038977/media/4bf93fe9739caa636cd3d09f79d453b6.gif'/> : mappingData.map((item)=>{
                    return (
                  <SingleProductCard item={item} key={item.id}/>
                    )
                })
            }

            
         
        </div>
      </div>
    </>
  )
}
