

const AdTwo = () => {
  const data = {
    text: 'Trucker Jacket',
    imgURL: '/assets/images/truckerJacketbgnone.png'
  }

  return (
    <section className="h-[25.13rem] flex"
      style={{
        background: 'linear-gradient(63.7deg, #D9D9D9 -6.41%, rgba(1, 69, 103, 0.47) 38.03%)'
      }}
    >
      <div className="h-full flex-1 font-customSerif text-white flex flex-col items-center justify-around">
        <p className="tracking-widest text-2xl">{data.text}</p>
        <div className="uppercase text-4xl text-center">
          <p className="" >top seller</p>
          <p className="mt-4" >of the</p>
          <p className="mt-4" >month</p>
        </div>
        <button className="font-customSans text-[#014567] uppercase tracking-widest border border-white bg-white  text-[1.5rem] px-[5rem] py-[1rem] font-light">
          Shop now
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <img className="object-cover" src={data.imgURL} alt="trucker jacket" />
      </div>
    </section>
  )
}

export default AdTwo