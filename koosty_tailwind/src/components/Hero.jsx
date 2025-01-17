import '../index.css';

const Hero = () => {
  return (
    <section
      className="h-screen w-full bg-center bg-cover "
      style={{ backgroundImage: "url('/assets/images/hero-bg-hd.webp')" }}
    >
      {/* <div className=' absolute bg-[#014567] top-0 left-0 h-screen w-full opacity-[37%]'>

      </div> */}
      <div className="h-screen hero-container flex flex-col justify-around p-[2rem] gap-[5rem] items-center">
        <img className='w-[13.63rem]' src="/assets/images/white.png" alt="logo" />
        <h1 className="text-center text-white font-customSerif text-[4rem]">Denim&nbsp;<br /><span className="line-through">Re</span>Defined</h1>
      </div>
    </section>
  )
}

export default Hero