import '../index.css'
const OrderNow = () => {
  return (
    <form id='order-now' className="w-full flex flex-col gap-[2rem] items-center">
      <label htmlFor="order-now" className="text-[2.5rem] uppercase">Order now!</label>
      <input className="form-input border-b border-blue-800 w-[400px] text-[1rem] py-[0.5rem] px-[1rem]" type="email" placeholder="email" />
      <input className="form-input border-b border-blue-800 w-[400px] text-[1rem] py-[0.5rem] px-[1rem]" type="telephone" placeholder="phone number" />
      <input className="form-input border-b border-blue-800 w-[400px] text-[1rem] py-[0.5rem] px-[1rem]" type="text" placeholder="product type" />
      <input className="form-input border-b border-blue-800 w-[400px] text-[1rem] py-[0.5rem] px-[1rem]" type="text" placeholder="message" />
      <button className='send-msg-btn uppercase p-[0.75rem]'>Send Message</button>
    </form>
  )
}

export default OrderNow