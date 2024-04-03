import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import axiosService from '../../apis/apiService';
import toast from 'react-hot-toast';

const ArtistForm = ({ onClose }) => {
  const [artist, setArtist] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (!artist) {
      console.error('Please choose a file');
      return;
    }
    
    formData.append('artist', artist);

    try {
      await axiosService().post('/artists/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success("Artist added successfully.")
      onClose()
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };


  return (
    <div className="h-full bg-bgSecondary shadow-md shadow-lime border-lime border w-[35%] flex flex-col px-8 py-6 rounded-lg gap-4">
        <div className='flex w-full justify-between items-center text-white'>
            <p className='font-bold text-lg'>Add artist</p>
            <FaXmark className="self-end cursor-pointer" onClick={onClose} size={25} />
        </div>
        {/* <hr /> */}
        <form onSubmit={handleSubmit} className='flex flex-col justify-between h-full mt-2'>
          <div className='flex flex-col gap-6 h-[80%] overflow-y-scroll pr-5' id="scrollbar">
              <div className="flex flex-col gap-2">
                  <label className='text-white'>Artist:</label>
                  <input type="text" className='h-10 bg-gray-600 rounded-md px-2 tracking-wider outline-none border-2 border-gray-600 caret-lime text-white font-light focus:border-2 focus:border-lime' value={artist} onChange={(e) => setArtist(e.target.value)} />
              </div>
{/* 
              <div className="flex flex-col gap-2">
                  <label className='text-white'>Cover image:</label>
                  <input type="file" className='rounded-md px-2 outline-none text-white' onChange={(e) => setCoverImage(e?.target?.files[0])} />
              </div> */}
          </div>
          <button type="submit" className='w-1/2 bg-lime py-2 px-4 rounded-md self-center text-black'>Submit</button>
        </form>
    </div>
  );
};

export default ArtistForm;
