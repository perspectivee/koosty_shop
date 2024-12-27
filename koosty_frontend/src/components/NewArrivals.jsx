import ProductCard from "./ProductCard"

const NewArrivals = () => {
  return (
    <section className="w-screen h-[600px]">
      <h2 className="text-gray-900 text-4xl text-center py-10 uppercase">New Arrivals</h2>
      <div className="card-container">
        <ProductCard />
      </div>
    </section>
  )
}

export default NewArrivals