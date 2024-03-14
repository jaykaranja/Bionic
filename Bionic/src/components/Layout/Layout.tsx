import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div className='flex h-full w-full'>
        <div className='flex flex-col h-full w-full'>
            <Navbar />
            <div className='flex w-full px-4 py-2 gap-4 h-[calc(100vh_-_40px)] overflow-hidden'>
                <Sidebar />
                <div className='flex w-full overflow-auto h-full'>
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout