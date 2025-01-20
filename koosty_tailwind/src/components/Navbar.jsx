import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex p-8 justify-around">
      <img className="h-[5rem]" src="/assets/images/black.png" alt="logo" />
      <ul className="w-[40%] flex justify-start h-[5rem] items-center">
        <li className="mr-[4rem]">
          <Link className="font-customSerif capitalize text-[1.9rem]" to='/'>
            Home
          </Link>
        </li>
        <li className="mr-[4rem]">
          <Link className="font-customSerif capitalize text-[1.9rem]" to='/'>
            Products
          </Link>
        </li>
        <li className="mr-[4rem]">
          <Link className="font-customSerif capitalize text-[1.9rem]" to='/'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar