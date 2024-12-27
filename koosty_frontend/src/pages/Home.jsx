import Hero from '../components/Hero';
import PopularPicks from '../components/PopularPicks';
import MustGift from '../components/MustGift';
import Advert from '../components/Advert'
import NewArrivals from '../components/NewArrivals';

const Home = () => {
  return (
    <main>
      <Hero />
      <PopularPicks />
      <MustGift />
      <Advert />
      <NewArrivals />
    </main>
  )
}

export default Home