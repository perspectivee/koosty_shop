import ProductCard from "./ProductCard"

const NewArrivals = () => {
  return (
    <section className="w-screen h-[600px] px-10">
      <h2 className="text-gray-900 text-4xl text-center py-10 uppercase">New Arrivals</h2>
      <div className="card-container flex overflow-scroll">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <button className="px-8 py-4 border border-blue-600 text-blue-600 text-2xl">
        View More
      </button>
    </section>
  )
}

export default NewArrivals