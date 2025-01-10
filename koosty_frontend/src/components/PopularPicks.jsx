import '../index.css';
const PopularPicks = () => {
  return (
    <section className="w-full bg-slate-300">
      <h2 className="text-gray-900 text-4xl text-center py-20 uppercase">
        Popular Picks
      </h2>
      <div className="btns-container">
        <button id='bags' className=" text-3xl text-gray-100 font-bold popular-picks-btn">
          Bags
        </button>
        <button id='accessories' className=" text-3xl text-gray-100 font-bold popular-picks-btn">
          Accessories
        </button>
        <button id='shoes' className=" text-3xl text-gray-100 font-bold popular-picks-btn">
          Shoes
        </button>
      </div>
    </section>
  )
}

export default PopularPicks