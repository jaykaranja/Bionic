import { useEffect } from 'react'
import Player from '../Player/Player'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import axiosService from '../../apis/apiService'


const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const res = async () => {
      axiosService().get("/api/me").then(res => {
        console.log("Authenticated.")
      }).catch(error => {
        if (error.response.status === 401) {
          navigate("/home");
        }
      })
    }

    res();
  }, [])

  return (
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

        />
    </div>
  )
}

export default Layout