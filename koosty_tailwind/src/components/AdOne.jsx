
const AdOne = () => {
  const data = {
    imgURL: '/assets/images/AdOneDenim.jpg',
    textLeft: 'Summer Sale',
    textRight: '60% off'
  }
  return (
    <section className='p-[1rem] m-[1rem] border-4 border-blue-500 border-dotted'
      style={{
        // borderSize: '4px',
        // borderStyle: 'dotted',
        // borderImage: 'linear-gradient(to right, red, orange, yellow, green, blue, purple)',
        // borderImageSlice: '1'
      }}
    >
      <div className="w-full h-[22rem] bg-cover relative"
        style={{ backgroundImage: `url(${data.imgURL})` }}>
        <h3 className="top-[5rem] left-[5rem] text-[5rem] absolute font-customSerif text-white w-[500px] text-center text-shadow tracking-[1rem] uppercase">
          {data.textLeft}
        </h3>
        <h3 className="top-[9rem] right-[5rem] text-[5rem] absolute font-customSerif text-white w-[500px] text-center text-shadow tracking-[1rem] uppercase">
          {data.textRight}
        </h3>
      </div>
    </section>
  )
}

export default AdOne