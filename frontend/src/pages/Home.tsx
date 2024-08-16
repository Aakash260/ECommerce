import React from 'react'
import {Link} from 'react-router-dom' 
import ProductCard from '../components/ProductCard'
const Home = () => {

const addToCarthandler=()=>{

}

  return (
    <div className="home">
      <section>
        <h1>Latest Product
        <Link to="/search" className='findmore'>More</Link>
        </h1>
        <main>
<ProductCard productId='vksvds' name="macbook" price={27000} stock={45} handler={addToCarthandler} photo='https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY327_FMwebp_QL65_.jpg'/>
        </main>
      </section>
      </div>
  )
}

export default Home