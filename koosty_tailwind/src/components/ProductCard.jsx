import { BsCartFill } from "react-icons/bs";

const ProductCard = ({ arrival }) => {
  return (
    <div className='' >
      <img className="object-cover h-[544px] w-[372px]" src={arrival.imgURL} alt={arrival.name} />
      <div className="flex items-center justify-between p-4 font-customSans" >
        <div className="flex flex-col basis-2/3 items-center">
          <p>
            {arrival.name}
          </p>
          <p>
            {arrival.price}
          </p>
        </div>
        <div className="basis-1/3 grid place-content-center">
          <BsCartFill className="text-[#014567] text-[2.2rem]" />
        </div>
      </div>
    </div>
  )
}

export default ProductCard