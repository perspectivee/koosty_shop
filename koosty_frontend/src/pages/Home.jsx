import Hero from '../components/Hero';
import PopularPicks from '../components/PopularPicks';
import MustGift from '../components/MustGift';
import Advert from '../components/Advert'
import NewArrivals from '../components/NewArrivals';
import Footer from '../components/Footer';
import ProductDetail from './ProductDetail';
import OrderNow from '../components/OrderNow';
import ContactUs from '../components/ContactUs';
import SearchBar from '../components/SearchBar';

// imported for test puroposes
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <main>
      {/* <Hero />
      <PopularPicks />
      
      <MustGift />
      <Advert />
      <NewArrivals />
      <Footer /> */}
      {/* below this is for test puroposes */}
      <Navbar />
      <SearchBar />
      <ProductDetail />
      {/* <OrderNow /> */}
      {/* <ContactUs /> */}
      <Footer />
    </main>
  )
}

export default Home