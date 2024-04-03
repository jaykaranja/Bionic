import { FaPlay, FaHeart } from 'react-icons/fa'
import { MdPause, MdSkipNext, MdSkipPrevious } from "react-icons/md";
import RockImage from '../../assets/rock.jpg'
import { useCallback, useEffect, useRef, useState } from 'react';
import axiosService from '../../apis/apiService';
import { useMusicPlayer } from '../../contexts/MusicPlayerContext';

type Props = {
    songUrl: string;
    title: {
        name: string;
        albumURL: string;
    };
    artist: {
        name: string;
        artistURL: string;
    };
    handlePlay: any;
    handlePause: any
};

const Player = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [liked, setLiked] = useState<boolean>(false);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const { state, pauseTrack } = useMusicPlayer();


    const togglePlay = useCallback(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    }, [isPlaying]);

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };
    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const likeSong = async () => {
        try {
          const response = await axiosService().post(`/api/liked-songs/create/${1}`, { song_id: 1 });
          console.log(response.data); // Handle successful response
        } catch (error) {
          console.error('Error:', error); // Handle error
        }
      };      

    useEffect(() => {
        audioRef.current.play();
        setIsPlaying(true)
    }, [state])

    return (
        <div className='w-full bg-bgSecondary h-28 px-4 py-4 flex flex-1 items-center justify-between'>
            <div className='flex gap-4 h-full items-center w-full'>
                <img src={RockImage} className='h-full aspect-square'/>
                <div className='w-max max-w-[50%] h-max flex flex-col gap-2 justify-center'>
                    <p className='text-white text-sm font-bold tracking-wide'>{state.currentTrack?.title}</p>
                    <p className='text-gray-300 text-sm font-semibold tracking-wide'>{state.currentTrack?.artist_name}</p>
                </div>
                <FaHeart onClick={likeSong} className={`cursor-pointer ${liked ? "animate-pulse text-red-700" : "text-gray-400" } ml-4`} size={20} fontSize={10} />
            </div>
            {/* <div className='flex gap-4 items-center justify-center flex-grow-0 w-full'> */}
            <div className='flex flex-col gap-2 w-full justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <div className="rounded-full cursor-pointer flex gap-2 items-center justify-center w-9 h-9 shadow-md  bg-[#0bcbcb] hover:bg-[#0bcbcbb4] transition duration-300">
                        <MdSkipPrevious size={24} />
                    </div>
                    <div className="rounded-full cursor-pointer flex gap-2 items-center shadow-md w-14 h-14 box-border justify-center bg-[#0bcbcb] hover:bg-[#0bcbcbb4] transition duration-300" onClick={togglePlay}>
                        {isPlaying ? 
                        (                       
                            <MdPause color="black" fontSize={30} />
                        ) :
                        (
                            <FaPlay color="black" className='ml-1' fontSize={20} />
                        )}
                    </div>
                    <div className="rounded-full cursor-pointer flex gap-2 items-center justify-center shadow-md w-9 h-9 bg-[#0bcbcb] hover:bg-[#0bcbcbb4] transition duration-300">
                    <MdSkipNext size={24}/>
                </div>
                </div>
                <div className="flex items-center w-full">
                    <span className="text-sm text-gray-300 mx-2">{formatTime(currentTime)}</span>
                    <label for="basic-range-slider-usage" class="sr-only">Example range</label>
                    <input 
                        min={0}
                        max={duration}
                        value={currentTime}
                        onChange={(e) => setCurrentTime(parseInt(e.target.value))}

                        type="range"
                        className="w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
                        [&::-webkit-slider-thumb]:w-2.5
                        [&::-webkit-slider-thumb]:h-2.5
                        [&::-webkit-slider-thumb]:-mt-0.5
                        [&::-webkit-slider-thumb]:appearance-none
                        [&::-webkit-slider-thumb]:bg-white
                        [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
                        [&::-webkit-slider-thumb]:rounded-full
                        [&::-webkit-slider-thumb]:transition-all
                        [&::-webkit-slider-thumb]:duration-150
                        [&::-webkit-slider-thumb]:ease-in-out
                        [&::-webkit-slider-thumb]:dark:bg-slate-700

                        [&::-moz-range-thumb]:w-2.5
                        [&::-moz-range-thumb]:h-2.5
                        [&::-moz-range-thumb]:appearance-none
                        [&::-moz-range-thumb]:bg-white
                        [&::-moz-range-thumb]:border-4
                        [&::-moz-range-thumb]:border-blue-600
                        [&::-moz-range-thumb]:rounded-full
                        [&::-moz-range-thumb]:transition-all
                        [&::-moz-range-thumb]:duration-150
                        [&::-moz-range-thumb]:ease-in-out

                        [&::-webkit-slider-runnable-track]:w-full
                        [&::-webkit-slider-runnable-track]:h-2
                        [&::-webkit-slider-runnable-track]:bg-gray-100
                        [&::-webkit-slider-runnable-track]:rounded-full
                        [&::-webkit-slider-runnable-track]:dark:bg-gray-700

                        [&::-moz-range-track]:w-full
                        [&::-moz-range-track]:h-2
                        [&::-moz-range-track]:bg-gray-100
                        [&::-moz-range-track]:rounded-full" id="basic-range-slider-usage">
                    </input>
                    {/* <input
                        type="range"
                        min={0}
                        max={duration}
                        value={currentTime}
                        onChange={(e) => setCurrentTime(parseInt(e.target.value))}
                        className="h-3 w-full bg-gray-300 text-lime rounded-lg overflow-hidden appearance-none"
                    /> */}
                    <span className="text-sm text-gray-300 mx-2"> {formatTime(duration)}</span>
                </div>
            </div>
            <p className='flex-grow-0 w-full'>Right</p>
            {/* Audio element for playing the song */}
            <audio
                ref={audioRef}
                src={(process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL) + state.currentTrack?.audio_file}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
            />
        </div>
    );
};

export default Player;
