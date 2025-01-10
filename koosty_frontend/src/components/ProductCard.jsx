import { CiShoppingCart } from "react-icons/ci";
import '../index.css'
const ProductCard = () => {
  return (
    <div className="product-card">
      <img className="card-image" src="/assets/images/image 4.jpg" alt="card-image" />
      <div className="details-container">
        <div className="details  text-gray-600">
          <p className="description">
            Denim Jacket
          </p>
          <p className="price">
            2500 ETB
          </p>
        </div>
        <button className="add-to-cart-btn">
          <CiShoppingCart className='add-cart-icon' />
        </button>
      </div>
    </div>
  )
}

export default ProductCard