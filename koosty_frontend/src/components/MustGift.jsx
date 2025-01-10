import '../index.css';

const MustGift = () => {
  return (
    <section className="must-gift-section ">
      <h2 className="text-gray-900 text-4xl text-center py-10 uppercase">Must Gift</h2>
      <div id="slider" className="must-gift-container ">
        <button className="must-gift-btn mr-5">
          <img className="object-cover" src="/assets/images/Group 7.png" alt="bags" />
        </button>
        <button className="must-gift-btn mr-5">
          <img className="object-cover" src="/assets/images/Group 8.png" alt="bags" />
        </button>
        <button className="must-gift-btn mr-5">
          <img className="object-cover" src="/assets/images/Group 70.png" alt="bags" />
        </button>
        <button className="must-gift-btn mr-5">
          <img className="object-cover" src="/assets/images/Group 69.png" alt="bags" />
        </button>
        <button className="must-gift-btn mr-5">
          <img className="object-cover" src="/assets/images/Group 11.png" alt="bags" />
        </button>
        <button className="must-gift-btn mr-5">
          <img className="object-cover" src="/assets/images/Group 67.png" alt="bags" />
        </button>
      </div>
    </section>
  )
}

export default MustGift