

const Footer = () => {
  return (
    <footer className="pt-[3rem] px-[4rem] pb-[5rem] w-full bg-black text-gray-200 mt-[2rem]">
      <div className="pb-[1.5rem] border-b border-dotted border-white">
        <div className="footer-container flex justify-between  font-customSerif text-[1.9rem]">
          <img className="h-[5rem]" src="/assets/images/white.png" alt="koosty logo" />
          <ul className="links-container w-[70%] flex justify-start h-[5rem] items-center">
            <li className="mr-[4rem]"><a href="#">Home</a></li>
            <li className="mr-[4rem]"><a href="#">Products</a></li>
            <li className="mr-[4rem]"><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer