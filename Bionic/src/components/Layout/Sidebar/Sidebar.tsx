import { FcHome, FcSearch } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div className='w-[20%] flex flex-col gap-4'>
        <div className='bg-[#141414] flex flex-col gap-2 p-4 rounded-xl'>
            <p className='text-xs font-semibold text-primary'>Home</p>
            <button onClick={() => navigate('/')} className='flex text-lime py-1 px-2 gap-2 items-center rounded-md hover:underline w-full'>
                <FcHome size={20} />
                Home
            </button>
            <button className='flex text-lime py-1 px-2 gap-2 items-center rounded-md hover:underline w-full'>
                <FcSearch size={20} />
                Search
            </button> 
        </div>
        <div className='bg-[#141414] flex flex-col gap-2 p-4 rounded-xl'>
            <p className='text-xs font-semibold text-primary'>Playlists</p>
            <button className='flex text-lime py-1 px-2 rounded-md hover:underline w-full'>
                Hip-Hop
            </button>
            <button className='flex text-lime py-1 px-2 rounded-md hover:underline w-full'>
                Pop
            </button> 
            <button className='flex text-lime py-1 px-2 rounded-md hover:underline w-full'>
                Afrobeats
            </button> 
            <button className='flex text-lime py-1 px-2 rounded-md hover:underline w-full'>
                Amapiano
            </button> 
            <button className='flex text-lime py-1 px-2 rounded-md hover:underline w-full'>
                Rock
            </button> 
            <button className='flex text-lime py-1 px-2 rounded-md hover:underline w-full'>
                RnB
            </button> 
            <button className='flex text-lime py-1 px-2 rounded-md hover:underline w-full'>
                Gengetone
            </button> 
            <button className='flex text-lime py-1 px-2 rounded-md hover:underline w-full'>
                Gospel
            </button> 

        </div>
    </div>
  )
}

export default Sidebar