import ProductCard from '../components/ProductCard'

const ProductsCardGrid = () => {
  const productArr = [
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

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4'>
      {
        productArr.map(
          (item, index) => (
            <ProductCard item={item} key={index} />
          )
        )
      }
    </section>
  )
}

export default ProductsCardGrid