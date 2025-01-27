import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-6 font-custom-serif relative">
      <div className="container mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-center">
        {/* Navigation Links at the Top for Mobile */}
        <nav className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <Link to="/" className="hover:text-gray-400 transition-colors">
            Home
          </Link>
          <Link to="/products" className="hover:text-gray-400 transition-colors">
            Products
          </Link>
          <Link to="/contact" className="hover:text-gray-400 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Dotted Line for Small Screens */}
        <div className="w-full border-dotted border-t-2 border-white md:hidden"></div>

        {/* Logo at the Bottom for Mobile, Same Row for Medium and Larger Screens */}
        <div className="md:order-first">
          <img
            src="/assets/images/white.png"
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Dotted Line for Medium and Larger Screens */}
        <div className="hidden md:block w-full border-dotted border-b-2 border-white absolute bottom-4 left-0"></div>
      </div>
    </footer>
  );
}