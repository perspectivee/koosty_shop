import ProductCard from "./ProductCard"


const NewArrivals = () => {

  const data = {
    arrivals: [
      {
        name: 'Denim Jacket',
        price: '2000 ETB',
        imgURL: '/assets/images/arrival1.png'
      },
      {
        name: 'Denim Vail Jeans',
        price: '3000 ETB',
        imgURL: '/assets/images/slider4.png'
      },
      {
        name: 'Denim Jacket',
        price: '4000 ETB',
        imgURL: '/assets/images/slider3.png'
      },
      {
        name: 'Denim Jacket',
        price: '2500 ETB',
        imgURL: '/assets/images/slider2.png'
      },
      {
        name: 'Denim Jacket',
        price: '4000 ETB',
        imgURL: '/assets/images/slider1.png'
      },
      {
        name: 'Denim Jacket',
        price: '2500 ETB',
        imgURL: '/assets/images/arrival1.png'
      },
    ]
  }

  return (
    <section className="h-screen w-full flex flex-col items-center p-[2rem] ">
      <h2 className="font-customSans text-[4rem]">
        New Arrivals
      </h2>
      <div id="arrivals-container" className="w-full flex flex-col flex-wrap content-center md:flex-row gap-[2rem] items-center justify-center">
        {
          data.arrivals.map(
            (arrival, index) =>
            (
              <ProductCard
                arrival={arrival}
              />
            )
          )
        }
      </div>
    </section>
  )
}

export default NewArrivals