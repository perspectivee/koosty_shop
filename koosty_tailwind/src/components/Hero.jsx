import '../index.css';

const Hero = () => {
  return (
    <section
      className="h-screen w-full flex flex-col bg-center bg-cover pt-[9.5rem] gap-[7.6rem] items-center"
      style={{ backgroundImage: "url('/assets/images/image 4.jpg')" }}
    >
      <div className='absolute bg-black top-0 left-0 h-screen w-full opacity-20'>

      </div>
      <img className='w-[13.63rem]' src="/assets/images/white.png" alt="logo" />
      <h1 className="w-[37rem] flex flex-wrap justify-center text-white font-customSerif text-[6.13rem]">Denim&nbsp;<p><span className="line-through">Re</span>Defined</p></h1>
    </section>
  )
}

export default Hero