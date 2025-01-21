import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { BsCartFill } from "react-icons/bs";


const ProductDetail = () => {

  const data = {
    mainImgURL: '/assets/images/slider1.png',
    imgURL1: '/assets/images/slider2.png',
    imgURL2: '/assets/images/slider3.png',
    imgURL3: '/assets/images/slider2.png',
    name: 'Denim Jacket',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vitae rem ipsa. Obcaecati harum officia quisquam, blanditiis autem, voluptatum fuga soluta doloribus repudiandae fugit optio dolorum, sunt voluptatem quam cum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vitae rem ipsa. Obcaecati harum officia quisquam, blanditiis autem, voluptatum fuga soluta doloribus repudiandae fugit optio dolorum, sunt voluptatem quam cum.',
    price: '2000 ETB'
  }

  return (
    <main>
      <Navbar />
      <section className="mt-[3rem] h-max p-16 flex flex-col items-center lg:flex-row lg:items-start lg:gap-4">
        <img className="h-[30rem] object-cover lg:order-2 lg:h-[]" src={data.mainImgURL} alt="main image" />
        <div className="flex w-[90%] justify-center mt-[1rem] lg:order-1 lg:flex-col lg:w-[800px] lg:mt-0 lg:items-start lg:gap-4">
          <img className="w-[33%] lg:w-full lg:h-[9rem] object-cover" src={data.imgURL1} alt="image 1" />
          <img className="w-[33%] lg:w-full lg:h-[9rem] object-cover" src={data.imgURL2} alt="image 2" />
          <img className="w-[33%] lg:w-full lg:h-[9rem] object-cover" src={data.imgURL3} alt="image 3" />
        </div>
        <div className="lg:order-3">
          <h2 className="font-customSans text-[2rem] tracking-widest mt-[1rem]">
            {data.name}
          </h2>
          <p className="font-customSerif text-gray-700">
            {data.detail}
          </p>
          <p className="font-customSans text-[1.7rem] text-gray-700 mt-4">
            {data.price}
          </p>
          <button className="w-[70%]  flex justify-center py-4 px-8 mt-4"
            style={{ background: 'linear-gradient(0deg, rgba(1, 69, 103, 0.47) -15.07%, rgba(2, 137, 205, 0.2585) 155.36%)' }}
          >
            <BsCartFill className="text-white text-[2.2rem]" />
          </button>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default ProductDetail