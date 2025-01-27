

const PopularPicksButton = ({ imgURL, name, secondBtn }) => {
  return (
    <div className={`p-4 basis-1/3 ${secondBtn ? 'border-4 border-blue-900 border-dotted' : ''}`}>
      <button className="w-full h-full  text-white font-customSans flex justify-center items-center text-[3rem] uppercase bg-center bg-cover break-words "
        style={{
          backgroundImage: `url(${imgURL})`,
          // borderImage: 'linear-gradient(to right, red, orange, yellow, green, blue, purple)',
          // borderImageSlice: '1',
          // border: '3px '
        }}
      >
        <p className="max-w-[90%]">
          {name}
        </p>
      </button>
    </div>
  )
}

export default PopularPicksButton