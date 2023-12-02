import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'400px'}} className='d-flex justify-content-center align-items-center flex-column bg-body-tertiary text-primary'>
         <div className='footer-content d-flex justify-content-evenly align-items-center w-100 flex-wrap'>
               <div style={{width:'400px'}}  className='website'>
              
                   <h4><i class="fa-solid fa-shirt fa-bounce"></i>{' '}TeeRex Store</h4>
                   <h6>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
                  <h6>Code licensed MIT, docs CC BY 3.0.</h6>
                   <p>Currently v1.0.0</p>
               </div>
              
         
           <div className='links d-flex flex-column ' >
          <h5> Links</h5>
      <Link className='text-primary' to={'/'} style={{textDecoration:'none'}}>Home</Link>
      <Link className='text-primary' to={'/cart'} style={{textDecoration:'none'}}>Cart</Link>
      <Link className='text-primary' to={'/wishlist'} style={{textDecoration:'none'}}>Wishlist</Link>

      
           </div>
           <div className='guides d-flex flex-column'>
            <h5>Guides</h5>
            <Link className='text-primary' to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none'}}>React</Link>
      <Link className='text-primary' to={'https://getbootstrap.com/'} style={{textDecoration:'none'}}>Bootstrap</Link>
      <Link className='text-primary' to={'https://fontawesome.com/'} style={{textDecoration:'none'}}>Fontawesome</Link>

    
            </div>
            <div className='contact d-flex flex-column flex-wrap'>
              <h4>Contact Us</h4>
              <div className='d-flex'>
                <input className='form-control rounded' type="text" placeholder='Enter your Email' />
              <button className='bg-info btn ms-3' style={{borderRadius:'10px',color:"white"}}><i className="fa-solid fa-arrow-right fa-beat"></i></button>
              </div>
              <div className='icons mt-3 d-flex justify-content-between fs-5'>
              <Link className='text-primary' to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none'}}><i class="fa-brands fa-linkedin"></i></Link>
      <Link className='text-primary' to={'https://getbootstrap.com/'} style={{textDecoration:'none'}}><i class="fa-brands fa-facebook"></i></Link>
      <Link className='text-primary' to={'https://fontawesome.com/'} style={{textDecoration:'none'}}><i class="fa-solid fa-envelope"></i></Link>
        <Link className='text-primary' to={'https://fontawesome.com/'} style={{textDecoration:'none'}}><i class="fa-brands fa-whatsapp"></i></Link>
        <Link className='text-primary' to={'https://fontawesome.com/'} style={{textDecoration:'none'}}><i class="fa-brands fa-github"></i></Link>
        <Link className='text-primary' to={'https://fontawesome.com/'} style={{textDecoration:'none'}}><i class="fa-brands fa-instagram"></i></Link>
              </div>
            </div>
          </div>
          <p>E-Cart Copyright@2023 Made with React</p>
      </div>
  )
}

export default Footer