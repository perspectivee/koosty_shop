

const PopularPicksButton = ({ imgURL, name }) => {
  return (
    <button className="text-white font-customSans flex justify-center items-center basis-1/3 border text-[3rem] uppercase bg-center bg-cover break-words"
      style={{
        backgroundImage: `url(${imgURL})`
      }}
    >
      <p className="max-w-[90%] break-words">
        {name}
      </p>
    </button>
  )
}

export default PopularPicksButton