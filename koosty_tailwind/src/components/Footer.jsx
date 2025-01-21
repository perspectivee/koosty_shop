import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="pt-[3rem] px-[4rem] pb-[5rem] w-full bg-black text-gray-200 mt-[2rem]">
      <div className="pb-[1.5rem] h-max md:border-b md:border-dotted md:border-white">
        <div className="footer-container flex flex-col-reverse md:flex-row justify-between  font-customSerif text-[1.9rem]">
          <img className="mt-[1rem] md:mt-0 h-[5rem] object-contain" src="/assets/images/white.png" alt="koosty logo" />
          <ul className="mt-[1rem] links-container w-full md:w-[70%] flex flex-col md:flex-row justify-center md:justify-start md:h-[5rem] items-center border-b border-dotted border-white md:border-none h-max">
            <li className="md:mr-[4rem]"><Link to="/">Home</Link></li>
            <li className="md:mr-[4rem]"><Link to="/products">Products</Link></li>
            <li className="md:mr-[4rem]"><Link to="/contact">Contact</Link></li>

          </ul>

        </div>
      </div>
    </footer>
  )
}

export default Footer