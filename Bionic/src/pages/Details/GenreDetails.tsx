import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { BsThreeDotsVertical } from "react-icons/bs";
import { Genre } from '../../types/Genre';
import { Song } from '../../types/Song';
import { FaPlay } from 'react-icons/fa';
import useGetData from '../../apis/useGetData';

type TParams = {
    genre_id: string
}

const GenreDetails = () => {
    const { genre_id }:TParams = useParams();
    const genre = useGetData({
      queryKeys: ["genres", genre_id],
      url: `api/genres/${genre_id}`
    })

    

  return (
    <div className='flex flex-col gap-6 px-2 w-full'>
        <div className='flex gap-4 items-end'>
            <div className='h-[200px] w-[200px] rounded-xl shadow-lg'>
              {genre.data?.cover_image && (
                <img 
                  src={"http://localhost:8000" + genre.data?.cover_image}
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
                      <div className="rounded-full flex items-center justify-center shadow-xl p-4 bg-[#0bcbcb] hover:bg-[#0bcbcbb4] transition duration-300">
                          <FaPlay color="black" size={20}/>
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
    </div>
  )
}

export default GenreDetails