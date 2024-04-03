import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from 'react-icons/fa';
import useGetData from '../../apis/useGetData';
import Modal from '../../components/modals/Modal'
import usePortalView from "../../hooks/usePortalView";
import AlbumForm from "../../components/Forms/AlbumForm";
import { useNavigate } from "react-router-dom";



const AlbumDetails = () => {
    const albums = useGetData({
      queryKeys: ["albums", "all"],
      url: "albums/get"
    })

    const navigate = useNavigate()
    const formState = usePortalView()

    return (
      <div className='flex flex-col gap-6 px-2 w-full overflow-auto relative py-3' id="scrollbar">
          <div className='flex gap-4 items-end'>
              {/* <img 
                  src={(process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL) + albums?.cover_image}
                  className="h-[200px] w-[200px] rounded-xl shadow-lg"
              /> */}
              <div className='flex flex-col gap-4'>
                  <div className='text-gray-300 text-sm font-semibold'>For you</div>
                  <div className='text-lime text-6xl font-semibold'>Albums</div>
              </div>
          </div>
          <div className="flex gap-4 gap-x-3 flex-wrap w-full h-full">
              {(albums.data?.length ?? 0 > 0) && 
                albums.data?.map((album: any) => 
                  (
                    <div onClick={() => navigate(`/albums/${album.guid}`)} className="shadow-md w-full px-6 py-4 h-24 flex items-center justify-between rounded-lg relative hover:cursor-pointer hover:bg-bgSecondary hover:shadow-xl transition duration-200 bg-bgSecondary/85">
                      <div className='flex gap-4 h-full'>
                        <div className="h-full flex items-center justify-center shadow-xl">
                          <img 
                            src={(process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL) + album?.cover_image}
                            className="h-full aspect-square shadow-lg"
                          />
                        </div>
                        <div className='flex flex-col gap-2 self-end'>
                          <p className='text-lime'>{album.title}</p>
                          <p className='text-white/65'>{album.artistName}</p>
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

export default AlbumDetails