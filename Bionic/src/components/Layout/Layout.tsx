import React, { useCallback, useEffect } from 'react';
import Player from '../Player/Player';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import axiosService from '../../apis/apiService';
import { MusicPlayerProvider, useMusicPlayer } from '../../contexts/MusicPlayerContext';

const Layout = () => {
  const navigate = useNavigate();
  const { playTrack, pauseTrack } = useMusicPlayer();

  const handlePlay = useCallback((url) => {
    playTrack(url);
  }, [playTrack]);

  const handlePause = useCallback(() => {
    pauseTrack();
  }, [pauseTrack]);


  useEffect(() => {
    const res = async () => {
      try {
        await axiosService().get("/api/me");
        console.log("Authenticated.");
      } catch (error) {
        if (error.response.status === 401) {
          navigate("/home");
        }
      }
    };

    res();
  }, [navigate]);

  return (
    <MusicPlayerProvider>
      <div className='flex h-full w-full flex-col relative'>
        <div className='flex flex-col h-full w-full'>
            <Navbar />
            <div className='flex w-full px-4 py-2 gap-4 h-[calc(100vh_-_190px)] overflow-hidden'>
                <Sidebar />
                <div className='flex w-full overflow-auto h-full'>
                    <Outlet />
                </div>
            </div>
        </div>
        <Player 
          handlePlay={handlePlay}
          handlePause={handlePause}
        />
      </div>
    </MusicPlayerProvider>
  );
};

export default Layout;
