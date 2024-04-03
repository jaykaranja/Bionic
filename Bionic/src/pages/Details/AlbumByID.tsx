import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlay, FaPlus } from 'react-icons/fa';
import useGetData from '../../apis/useGetData';
import Modal from '../../components/modals/Modal'
import usePortalView from "../../hooks/usePortalView";
import AlbumForm from "../../components/Forms/AlbumForm";
import { useParams } from "react-router-dom";
import { useMusicPlayer } from "../../contexts/MusicPlayerContext";



const AlbumByID = () => {
  const { album_id }: { album_id: string } = useParams()
    const album = useGetData({
      queryKeys: ["albums", album_id],
      url: `api/songs/album/${album_id}`
    })

    const formState = usePortalView()

    const { playTrack, pauseTrack } = useMusicPlayer();

    

  return (
    <div className='flex flex-col gap-6 px-2 w-full overflow-auto relative py-3' id="scrollbar">
        <div className='flex gap-4 items-end'>
            <img 
                src={(process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL) + album.data?.album?.cover_image}
                className="h-[200px] w-[200px] rounded-xl shadow-lg"
            />
            <div className='flex flex-col gap-4'>
                <div className='text-gray-300 text-sm font-semibold'>{album.data?.album.artistName}</div>
                <div className='text-lime text-6xl font-semibold'>{album.data?.album.title}</div>
            </div>
        </div>
        <div className="flex gap-4 gap-x-3 flex-wrap w-full h-full">
            {album.data && 
              album.data?.songs.map((song: any) => 
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
                        <p className='text-lime'>{song.title}</p>
                        <p className='text-white/65'>{song.artist_name}</p>
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
        <div className="sticky bottom-2 right-12 bg-lime rounded-full self-end w-max p-6" onClick={formState.toggle}>
            <FaPlus color="black" size={20} />
        </div>
        {formState.isOpen && (
            <Modal>
              <AlbumForm
                onClose={formState.toggle}
              />
            </Modal>
          )}
    </div>
  )
}

export default AlbumByID