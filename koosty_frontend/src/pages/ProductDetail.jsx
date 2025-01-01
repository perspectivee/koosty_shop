import '../index.css';


const ProductDetail = () => {
  return (
    <section className='product-detail-container flex h-[80%] w-full'>
      <div className="image-col-cotainer flex flex-col h-full">
        <img className='image-col-img object-cover' src="/assets/images/Group 70.png" alt="side pic" />
        <img className='image-col-img object-cover' src="/assets/images/Group 69.png" alt="side pic" />
        <img className='image-col-img object-cover' src="/assets/images/Group 68.png" alt="side pic" />
      </div>
      <div className="image-container">
        <img className='main-detail-img object-cover' src="/assets/images/Group 68.png" alt="side pic" />
      </div>
      <div className="detail ml-[1rem] w-[40%]">
        <h2 className="product-name text-4xl ">
          Denim Jacket
        </h2>
        <p className='product-detail'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="price">
          2000 ETB
        </p>
        <button className='add-to-cart-btn'>

        </button>
      </div>
    </section>
  )
}

export default ProductDetail