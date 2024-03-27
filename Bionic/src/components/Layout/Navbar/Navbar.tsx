// import logo from '../../../assets/bionic.png'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FcMusic } from "react-icons/fc";
import { useCallback } from 'react';




const Navbar = () => {
  const navigate = useNavigate()
  const handleSignOut = useCallback(() => {
    localStorage.clear();
    navigate("/home")
  }, [navigate])
  return (
    <div className='h-[70px] w-full flex px-6 justify-between items-center py-4'>
      <div className='flex text-lg items-center gap-2'>
        {/* <img src={logo} className='w-16 h-10' /> */}
        <FcMusic size={30} />
        <p className='font-semibold text-lime'>Bionic</p>
      </div>
      <div className='flex gap-4 w-1/2 justify-center items-center'>
        <input 
          type='text' 
          className='bg-[#141414] focus:border-2 box-border focus:border-lime focus:outline-none w-3/4 h-12 rounded-xl px-4 outline-none caret-white placeholder:px-1 text-white transition duration-200' 
          placeholder='What do you wanna listen to today? 😊' 
        />
        <FaSearch className='text-lime hover:cursor-pointer' size={20}/>
      </div>
      <div className='flex gap-4 items-center'>
        <img src='https://storage.googleapis.com/pai-images/c09a880209cb4e83a42e0d9b81e71a10.jpeg' className='w-10 h-10 rounded-full shadow-lg' />
        <button onClick={() => handleSignOut()} className='flex gap-2 px-5 py-2 rounded-md items-center justify-center bg-[#0bcbcb]'>
          Sign out
        </button>
      </div>
    </div>
  )
}

export default Navbar