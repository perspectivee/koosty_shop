import '../index.css';

const Hero = () => {
  return (
    <section
      className="h-screen w-full flex justify-center items-center bg-center bg-cover"
      style={{ backgroundImage: "url('/assets/images/image 4.jpg')" }}
    >
      <div className='absolute bg-black top-0 left-0 h-screen w-full opacity-20'>

      </div>
      <img className='' src="/assets/images/white.png" alt="logo" />
      <h1 className="font-CustomSerif">Denim <span className="line-through">Re</span>Defined</h1>
    </section>
  )
}

export default Hero