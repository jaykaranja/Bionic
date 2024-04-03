import { FcHome } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { FaCompactDisc, FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { BsMusicNoteList } from "react-icons/bs";
import useGetData from "../../../apis/useGetData";

const Sidebar = () => {
  const navigate = useNavigate()
  const genres = useGetData({
    queryKeys: ["genres", "lookups"],
    url: "api/lookups/1"
  })
  return (
    <div className='w-[20%] flex flex-col h-full z-50 gap-4 overflow-y-scroll p1-2 pr-4' id='scrollbar'>
        <div className='bg-[#141414] flex flex-col gap-2 p-4 rounded-xl transition-all duration-200  h-full'>
            <p className='text-xs font-semibold text-primary'>Home</p>
            <button onClick={() => navigate('/')} className='flex text-lime py-1 px-2 gap-2 items-center rounded-md hover:underline w-full'>
                <FcHome size={20} />
                Home
            </button>
            <button onClick={() => navigate('/liked-songs')} className='flex text-lime py-1 px-2 gap-2 items-center rounded-md hover:underline w-full'>
                <FaHeart size={20}  color="red" />
                Liked songs
            </button> 
            <button onClick={() => navigate('/artists')} className='flex text-lime py-1 px-2 gap-2 items-center rounded-md hover:underline w-full'>
                <FaUser size={20} color="purple" />
                Artists
            </button> 
            <button onClick={() => navigate('/albums')} className='flex text-lime py-1 px-2 gap-2 items-center rounded-md hover:underline w-full'>
                <FaCompactDisc size={20} color="grey" />
                Albums
            </button> 
            <button onClick={() => navigate('/playlist')} className='flex text-lime py-1 px-2 gap-2 items-center rounded-md hover:underline w-full'>
                <BsMusicNoteList size={20} color="yellow" />
                Playlists
            </button> 
        </div>
        <div className='bg-[#141414] flex flex-col gap-2 p-4 rounded-xl'>
            <p className='text-xs font-semibold text-primary'>Playlists</p>
            {Array.isArray(genres.data) && genres.data?.map((genre) => (
                <button onClick={() => navigate(`genres/${genre.guid}`)} className='flex text-lime py-1 px-2 rounded-md hover:underline w-full'>
                    {genre.name}
                </button>
            ))}
       </div>
    </div>
  )
}

export default Sidebar