import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ProductsCardGrid from "../components/ProductsCardGrid";
import Footer from '../components/Footer';
const Products = () => {
  return (
    <main>
      <Navbar />
      <SearchBar />
      <ProductsCardGrid />
      <Footer />
    </main>
  )
}

export default Products