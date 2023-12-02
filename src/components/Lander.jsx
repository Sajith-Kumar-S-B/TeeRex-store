import React,{useContext,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import "../Styles/styles.css"

import {product_search} from '../Redux/ProductConstant';
import { Context } from '../Context/contextProvider';

const Lander = () => {
  const dispatch = useDispatch();

    const { search, setSearch } = useContext(Context);
    console.log(search);

    
    const searchData = () =>{
        dispatch( product_search(search.split(" ")) );
    }
    useEffect(()=>{
        
searchData()


    },[search])

    
  return (
    <>
      
      <div className="searchBox">
        <input type="text" placeholder='Search for products...' onChange={(e)=>{
           setSearch(e.target.value)}
        }  
       
        />
         <div className="searchIconBox" onClick={searchData} >
            <i class="fa fa-search" aria-hidden="true"></i>
         </div>
     </div>


    </>
  )
}

export default Lander