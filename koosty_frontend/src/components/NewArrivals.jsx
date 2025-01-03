import ProductCard from "./ProductCard"

const NewArrivals = () => {
  return (
    <section className="w-screen h-[700px] px-10 flex flex-col items-center">
      <h2 className="text-gray-900 text-4xl text-center py-10 uppercase">New Arrivals</h2>
      <div className="card-container flex">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <button className="view-more-btn px-6 py-3 border border-blue-600 text-blue-600 text-xl uppercase">
        View More
      </button>
    </section>
  )
}

export default NewArrivals