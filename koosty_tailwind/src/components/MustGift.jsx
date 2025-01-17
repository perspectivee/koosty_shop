

const MustGift = () => {

  const sliderImgURLs = [
    '/assets/images/slider1.png',
    '/assets/images/slider2.png',
    '/assets/images/slider3.png',
    '/assets/images/slider4.png',
    '/assets/images/slider5.png',
    '/assets/images/slider6.png'
  ]

  return (
    <section className="h-screen w-full flex flex-col items-center justify-between p-[2rem] ">
      <h2 className="font-customSans text-[4rem]">
        Must Gift
      </h2>

      <div className="slider flex overflow-auto gap-[1.5rem]">
        {
          sliderImgURLs.map((item, index) => (
            <img className="object-cover h-[22rem] w-[22rem]" src={item} alt="must gift" key={index} />
          ))
        }
      </div>
      <button className="text-[#014567] uppercase tracking-widest border border-[#014567]  text-[1.5rem] px-[5rem] py-[1rem] font-light">
        Shop Now
      </button>
    </section>
  )
}

export default MustGift