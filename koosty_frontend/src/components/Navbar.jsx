import '../index.css';
const Navbar = () => {
  return (
    <nav className="navbar w-full p-4 flex justify-between">
      <div className="logo-container w-[20%]">
        <a className='logo-link' href="#">
          <img className="nav-logo" src="/assets/images/black.png" alt="navbar logo" />
        </a>
      </div>
      <ul className="links-container">
        <li>
          <a className='nav-link' href="#">Home</a>
        </li>
        <li>
          <a className='nav-link' href="#">Products</a>
        </li>
        <li>
          <a className='nav-link' href="#">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar