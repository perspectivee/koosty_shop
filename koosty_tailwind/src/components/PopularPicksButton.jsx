

const PopularPicksButton = ({ imgURL, name }) => {
  return (
    <button className="text-white font-customSans flex justify-center items-center flex-1 border text-[3rem] uppercase bg-center bg-cover"
      style={{
        backgroundImage: `url(${imgURL})`
      }}
    >
      {name}
    </button>
  )
}

export default PopularPicksButton