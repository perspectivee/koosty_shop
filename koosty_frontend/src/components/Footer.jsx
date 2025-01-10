import '../index.css'

const Footer = () => {
  return (
    <footer className="px-40 py-10 bg-black text-gray-100">
      <div className="footer-cotainer flex justify-between mb-5">
        <img className="footer-logo" src="/assets/images/white.png" alt="footer logo" />
        <ul className="footer-links flex w-[60%]">
          <li className='footer-link-li p-2'><a className='text-lg' href="#">Home</a></li>
          <li className='footer-link-li p-2'><a className='text-lg' href="#">Products</a></li>
          <li className='footer-link-li p-2'><a className='text-lg' href="#">Contacts</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer