import React, { useEffect, useState } from 'react'
import "../Styles/styles.css"
import {useDispatch, useSelector} from "react-redux"
import { decrease_item_quantity, delete_wishlist_item,  increase_item_quantity } from '../Redux/WishlistConstant';
import {useNavigate} from "react-router-dom"
export default function Cart() {
  const {wishlistData }= useSelector((store)=>store.WishlistReducer);
  const navigate=useNavigate()
  const dispatch=useDispatch()
   let totalPrice=0;
  //.log(cartData)
  console.log("wishlisted item ", wishlistData)

  

  return (
    <>
    <div id="navBar">
      <div className="menu">
        <h3 className='text-dark'>Wishlist</h3>
        <i class="fa fa-shopping-cart" aria-hidden="true" style={{fontSize:"35px" , cursor:"pointer"}}
         onClick={()=>{
         }}
        >
            <span id='cart_item_count'>{ wishlistData.length>0?wishlistData.length:""}</span>
        </i>
      </div>
    </div>
    <div className="cart_main">
       <p>Wishlisted Items</p> 
       <div className="cart_content">
          {
            wishlistData.length? wishlistData.map((e , i)=>{
            
              return (
                <div className="cart_content_main" id={e.id}>
              <img src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png" alt="" />
               <div className="price_and_title_box">
                <p>{e.name}</p>
                <h4>Rs {e.price}</h4>
               </div>
               <div className="button_box">
                 <div className="increase_decrease_box">
                  <button onClick={()=>{
                    // checking quantity limit 
                     let itemIndex= wishlistData.findIndex((e)=>e.currentQuantity>e.quantity);
                     if(itemIndex!=-1){
                     alert("Item quantity limit is exceeded ")
                      return 
                     }
                     dispatch(increase_item_quantity(e.id))
                  }}>+</button>
                  <div style={{marginTop:"6px"}}>{e.currentQuantity}</div>
                  <button onClick={()=>{
                      dispatch(decrease_item_quantity(e.id))
                  }}>-</button>
                 </div>
                  <button onClick={()=>{
                      console.log("clicked item id" , e.id, e)
                      dispatch(delete_wishlist_item(e.id))
                  }}>Delete</button>
               </div>
          </div>
              )
            }):  <div className='no_cart_item_div'>
                   <p  onClick={()=>{navigate("/")}}>Start adding wishlist</p>
                  <img width={'500px'} hw src="https://cdn.dribbble.com/users/2124240/screenshots/6050984/cart_icon__interaction.gif" alt="" />
            </div>
          }
          
        </div>

      
    </div>

     
    
    </>
  )
}
