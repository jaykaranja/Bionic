import { UseQueryResult, useQueryClient } from '@tanstack/react-query';
import { BsThreeDotsVertical } from "react-icons/bs";
import { Genre } from '../../types/Genre';
import { Song } from '../../types/Song';
import { FaPlay } from 'react-icons/fa';
import backdrop from '../../assets/backdrop.jpg'
import useGetData from '../../apis/useGetData';

type TParams = {
    genre_id: string
}

const LikedDetails = () => {
    const songs: UseQueryResult<Song[]> = useGetData({
      queryKeys: ['liked-songs', 'all'],
      url:  "api/liked-songs/all"
    });
    

  return (
    <div className='flex flex-col gap-6 px-2 w-full'>
        <div className='flex gap-4 items-end'>
            <img 
                src={backdrop}
                className="h-[200px] w-[200px] rounded-xl shadow-lg"
            />
            <div className='flex flex-col gap-4'>
                <div className='text-gray-300 text-sm font-semibold'>By you</div>
                <div className='text-lime text-6xl font-semibold'>Liked Songs</div>
            </div>
        </div>
        <div className="flex gap-4 gap-x-3 flex-wrap w-full h-full overflow-auto" id="scrollbar">
            {(songs.data?.length ?? 0 > 0) && 
              songs.data?.map((item: Song) => 
                (
                  <div className="shadow-md w-full px-6 py-4 h-24 flex items-center justify-between rounded-lg relative hover:cursor-pointer hover:bg-bgSecondary hover:shadow-xl transition duration-200 bg-bgSecondary/85">
                    <div className='flex gap-4'>
                      <div className="rounded-full flex items-center justify-center shadow-xl p-4 bg-[#0bcbcb] hover:bg-[#0bcbcbb4] transition duration-300">
                          <FaPlay color="black" size={20}/>
                      </div>
                      <div className='flex flex-col gap-2 self-end'>
                        <p className='text-white/65'>{item.song.title}</p>
                        <p className='text-lime'>{item.song.artist_name}</p>
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

export default LikedDetails