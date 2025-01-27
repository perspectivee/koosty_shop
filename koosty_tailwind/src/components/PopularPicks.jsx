import PopularPicksButton from "./PopularPicksButton"

const PopularPicks = () => {
  const buttonsData = [
    {
      name: "bags",
      imgURL: "/assets/images/bags.png"
    },
    {
      name: "accessories",
      imgURL: "/assets/images/accessories.png"
    },
    {
      name: "shoes",
      imgURL: "/assets/images/shoes.png"
    },
  ]
  return (
    <section className="h-screen w-full flex flex-col items-center py-[2rem] ">
      <h2 className="font-customSans text-[4rem]">
        Popular Picks
      </h2>
      <div className="btns-container flex flex-col w-full gap-[1rem] h-popularPicks">
        {
          buttonsData.map((button, index) =>
          (
            <PopularPicksButton key={index} name={button.name} imgURL={button.imgURL} secondBtn={index === 1 ? true : false} />
          )
          )
        }
      </div>
    </section>
  )
}

export default PopularPicks