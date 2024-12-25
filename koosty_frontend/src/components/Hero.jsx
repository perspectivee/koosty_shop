
const Hero = () => {
  return (
    <>
      <div className="hero-transluncent absolute w-full -z-10 h-screen bg-black opacity-30">

      </div>
      <div className="hero-background absolute w-full -z-20 h-screen"></div>
      <section className='hero-section w-full h-screen pt-20 flex flex-col justify-top items-center gap-[200px]'>
        <img src="/assets/images/white.png" alt="logo" className="w-[217px]" />
        <h1 className="hero-heading text-5xl text-center text-gray-50" >Denim <br /> <span className="line-through">Re</span>defined</h1>
      </section>
    </>
  )
}

export default Hero