import { useParams } from 'react-router-dom';
import { BsThreeDotsVertical } from "react-icons/bs";
import { Song } from '../../types/Song';
import { FaPlay, FaPlus } from 'react-icons/fa';
import useGetData from '../../apis/useGetData';
import { useMusicPlayer } from '../../contexts/MusicPlayerContext';
import usePortalView from '../../hooks/usePortalView';
import GenreForm from '../../components/Forms/GenreForm';
import Modal from '../../components/modals/Modal'

type TParams = {
    genre_id: string
}

const GenreDetails = () => {
    const { genre_id }:TParams = useParams();
    const genre = useGetData({
      queryKeys: ["genres", genre_id],
      url: `api/genres/${genre_id}`
    })

    const { playTrack, pauseTrack } = useMusicPlayer();

    const formState = usePortalView()


  return (
    <div className='flex flex-col gap-6 px-2 w-full relative'>
        <div className='flex gap-4 items-end'>
            <div className='h-[200px] w-[200px] rounded-xl shadow-lg'>
              {genre.data?.cover_image && (
                <img 
                  src={(process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL) + genre.data?.cover_image}
                  className="h-full w-full rounded-xl shadow-lg"
                />
              )}
            </div>
            <div className='flex flex-col gap-4'>
                <div className='text-gray-300 text-sm font-semibold'>Genre</div>
                <div className='text-lime text-6xl font-semibold'>{genre.data?.name}</div>
            </div>
        </div>
        <div className="flex gap-4 gap-x-3 flex-wrap w-full h-full overflow-auto" id="scrollbar">
            {((genre.data?.songs?.length > 0) && Array.isArray(genre.data?.songs)) &&
              genre.data?.songs?.map((song: Song) => 
                (
                  <div className="shadow-md w-full px-6 py-4 h-24 flex items-center justify-between rounded-lg relative hover:cursor-pointer hover:bg-bgSecondary hover:shadow-xl transition duration-200 bg-bgSecondary/85">
                    <div className='flex gap-4'>
                      <div className="rounded-full aspect-square w-14 flex items-center justify-center shadow-xl p-2 bg-[#0bcbcb] hover:bg-[#0bcbcbb4] transition duration-300">
                          <FaPlay 
                            color="black" 
                            size={22}
                            onClick={() => playTrack(song)}
                          />
                      </div>
                      <div className='flex flex-col gap-2 self-end'>
                        <p className='text-lime'>{song.artist_name}</p>
                        <p className='text-white/65'>{song.title}</p>
                      </div>
                    </div>
                    <span className='justify-self-end'>
                      <BsThreeDotsVertical className='text-lime' fontSize={25} />
                    </span>
                  </div>
                )
                )
            }
        </div>
        <div className="absolute bottom-2 right-12 bg-lime rounded-full p-6" onClick={formState.toggle}>
            <FaPlus color="black" size={20} />
        </div>
        {formState.isOpen && (
          <Modal>
            <GenreForm 
              onClose={formState.toggle}
            />
          </Modal>
        )}
    </div>
  )
}

export default GenreDetails