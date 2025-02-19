import Hero from "../components/Hero";
import PopularPicks from "../components/PopularPicks";
import MustGift from "../components/MustGift";
import AdOne from "../components/AdOne";
import NewArrivals from "../components/NewArrivals";
import AdTwo from "../components/AdTwo";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <main>
      <Hero />
      <PopularPicks />
      <MustGift />
      <AdOne />
      <NewArrivals />
      <AdTwo />
      <Footer />
    </main>
  )
}

export default Home