

const ContactForm = () => {
  return (
    <form className="flex flex-col items-center" id="contact-form" action="">
      <label className="font-customSans text-[3.5rem]" htmlFor="contact-form">Contact Us!</label>
      <input className="px-8 py-4 text-[1.5rem] font-customSerif border-b border-[#014567] outline-none w-[600px] mb-[2rem]" placeholder="Email" type="email" />
      <input className="px-8 py-4 text-[1.5rem] font-customSerif border-b border-[#014567] outline-none w-[600px] mb-[2rem]" placeholder="Phone Number" type="tel" />

      <input className="px-8 py-4 text-[1.5rem] font-customSerif border-b border-[#014567] outline-none w-[600px] mb-[2rem]" placeholder="Message" type="text" />

      <button className="my-[4rem] font-customSans text-[#014567] tracking-widest border border-[#014567] px-8 py-4 text-[2rem]">
        Send Message
      </button>
    </form>
  )
}

export default ContactForm