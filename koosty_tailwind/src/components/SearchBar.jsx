import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
  return (
    <section className='mt-[2rem] flex justify-center items-center'>
      <input className="text-[1.5rem] border border-[#014567] w-[60%] min-w-[400px] p-[1.5rem] rounded-[3rem] outline-none mr-[2rem]" type="text" />
      <CiSearch className="text-[51px]" />
    </section>
  )
}

export default SearchBar