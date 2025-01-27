import Hero from "../components/Hero";
import PopularPicks from "../components/PopularPicks";
import MustGift from "../components/MustGift";
import Ad from "../components/Ad";
import NewArrivals from "../components/NewArrivals";
import Footer from "../components/Footer";
import TopSeller from "../components/TopSeller";
export default function Home() {
  return (
    <main>
      <Hero />
      <PopularPicks />
      <MustGift />
      <Ad
        backgroundImage="https://picsum.photos/1200/600?random=1"
        text1="Summer sale"
        text2="60% off"
      />
      <NewArrivals />
      <TopSeller
        topText="Denim Jacket"
        imageUrl="https://picsum.photos/300/300?random=1"
      />
      <Footer />
    </main>
  );
}