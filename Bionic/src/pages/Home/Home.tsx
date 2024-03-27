import { UseQueryResult } from "@tanstack/react-query";
import useGetData from "../../apis/useGetData"
import TopCard from "../../components/Dashboard/TopCard"
import Navigator from "../../components/Shared/Navigator/Navigator"
import { Genre } from '../../types/Genre';
import { FaPlus } from "react-icons/fa";
import usePortalView from "../../hooks/usePortalView";
import Modal from "../../components/modals/Modal.jsx"
import SongForm from "../../components/Forms/SongForm";

const Home = () => {
  const genres: UseQueryResult<Genre[]> = useGetData({
    queryKeys: ['genres', 'all'],
    url:  "genres"
  });

  const formState = usePortalView()

  console.log(genres.data)
  return (
    <div className='w-full h-full flex flex-col gap-6 rounded-xl p-4 relative'>
        <div className="flex items-center gap-4">
          <Navigator />
          <p className="bg-secondary/50 px-4 py-1 font-semibold rounded-2xl hover:bg-secondary hover: cursor-pointer transition text-sm text-lime h-full flex items-center">Music</p>
          <p className="bg-secondary/50 px-4 py-1 font-semibold rounded-2xl hover:bg-secondary hover: cursor-pointer transition text-sm text-lime h-full flex items-center">Library</p>
          <p className="bg-secondary/50 px-4 py-1 font-semibold rounded-2xl hover:bg-secondary hover: cursor-pointer transition text-sm text-lime h-full flex items-center">Favorites</p>
        </div>
        <div className="flex gap-4 gap-x-3 flex-wrap w-full h-full overflow-auto " id="scrollbar">
            {(genres.data && genres.isSuccess && Array.isArray(genres.data)) && 
              genres.data?.map((genre: Genre) => {
                return (
                  <div className="shadow-md aspect-square h-[200px] flex items-end rounded-lg relative">
                    <TopCard 
                      title={genre.name}
                      imageUrl={"http://localhost:8000" + genre.cover_image}
                      guid={genre.guid}
                    />
                  </div>
                )
              })
            }
        </div>
        <div className="absolute bottom-2 right-12 bg-lime rounded-full p-6" onClick={formState.toggle}>
            <FaPlus color="black" size={20} />
        </div>
        {formState.isOpen && (
          <Modal>
            <SongForm 
              onClose={formState.toggle}
            />
          </Modal>
        )}
    </div>
  )
}

export default Home