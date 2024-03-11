import logo from '../../../assets/bionic.png'
import { useNavigate } from 'react-router-dom'
import { FaHeadphonesAlt, FaSearch } from "react-icons/fa";



const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='h-[70px] w-full flex px-6 justify-between items-center py-2 border-b-2'>
      <div className='flex items-center gap-2'>
        <img src={logo} className='w-16 h-10' />
        <p className='text-lg font-semibold'>Bionic</p>
      </div>
      <div className='flex gap-4 w-1/2 justify-center items-center'>
        <input type='text' 
        className='bg-gray-100 w-3/4 h-10 rounded-xl px-4 outline-none focus:border-4 transition duration-200' placeholder='What do you wanna listen to today? 😊' />
        <FaSearch  size={20}/>
      </div>
      <div className='flex gap-4'>
        <img src='https://storage.googleapis.com/pai-images/c09a880209cb4e83a42e0d9b81e71a10.jpeg' className='w-12 rounded-full shadow-lg' />
        <button onClick={() => navigate("/authentication/sign-up")} className='flex gap-2 items-center text-[15px] bg-[#0bcbcb] py-2 px-4 rounded-lg text-base'>
          <FaHeadphonesAlt size={15} />
          Listen
        </button>
      </div>
    </div>
  )
}

export default Navbar