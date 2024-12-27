import { FaCartPlus } from "react-icons/fa";
const ProductCard = () => {
  return (
    <div className="product-card">
      <img className="card-image" src="/assets/images/Group 70.png" alt="card-image" />
      <div className="details-container">
        <div className="details">
          <p className="description">
            Deinim Jacket
          </p>
          <p className="price">
            2500 ETB
          </p>
        </div>
        <button className="add-to-cart-btn">
          <FaCartPlus />
        </button>
      </div>
    </div>
  )
}

export default ProductCard