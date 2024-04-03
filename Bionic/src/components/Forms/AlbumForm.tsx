import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import useGetData from '../../apis/useGetData';
import axiosService from '../../apis/apiService';
import toast from 'react-hot-toast';

const AlbumForm = ({ onClose }) => {
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');
  const [coverImage, setCoverImage] = useState<File | null>(null);

  const { data: genres } = useGetData({
    queryKeys: ['genreLookups'],
    url:  "api/lookups/1"
  })

  const { data: artists } = useGetData({
    queryKeys: ['artistsLookups'],
    url:  "api/lookups/3"
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (!coverImage) {
      console.error('Please choose a file');
      return;
    }
    
    formData.append('album', album);
    formData.append('artist', artist);
    formData.append('genre', genre);
    formData.append('coverImage', coverImage);

    try {
      await axiosService().post('/albums/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success("Album added successfully.")
      onClose()
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };



  return (
    <div className="h-full bg-bgSecondary shadow-md shadow-lime border-lime border w-[35%] flex flex-col px-8 py-6 rounded-lg gap-4">
        <div className='flex w-full justify-between items-center text-white'>
            <p className='font-bold text-lg'>Add album</p>
            <FaXmark className="self-end cursor-pointer" onClick={onClose} size={25} />
        </div>
        {/* <hr /> */}
        <form onSubmit={handleSubmit} className='flex flex-col justify-between h-full mt-2'>
          <div className='flex flex-col gap-6 h-[80%] overflow-y-scroll pr-5' id="scrollbar">
              <div className="flex flex-col gap-2">
                  <label className='text-white'>Album Name:</label>
                  <input type="text" className='h-10 bg-gray-600 rounded-md px-2 tracking-wider outline-none border-2 border-gray-600 caret-lime text-white font-light focus:border-2 focus:border-lime' value={album} onChange={(e) => setAlbum(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2">
                  <label className='text-white'>Artist:</label>
                  <select 
                    className='h-10 bg-gray-600 rounded-md px-2 tracking-wider outline-none border-2 border-gray-600 caret-lime text-white font-light focus:border-2 focus:border-lime'
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                  >
                    {artists?.map((genre) => (
                      <option value={genre.guid}>{genre.name}</option>
                    ))}
                  </select>              
              </div>
              <div className="flex flex-col gap-2">
                  <label className='text-white'>Genre:</label>
                  <select 
                    className='h-10 bg-gray-600 rounded-md px-2 tracking-wider outline-none border-2 border-gray-600 caret-lime text-white font-light focus:border-2 focus:border-lime'
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  >
                    {genres?.map((genre) => (
                      <option value={genre.guid}>{genre.name}</option>
                    ))}
                  </select>
              </div>
              <div className="flex flex-col gap-2">
                  <label className='text-white'>Cover image:</label>
                  <input type="file" className='rounded-md px-2 outline-none text-white' onChange={(e) => setCoverImage(e?.target?.files[0])} />
              </div>
          </div>
          <button type="submit" className='w-1/2 bg-lime py-2 px-4 rounded-md self-center text-black'>Submit</button>
        </form>
    </div>
  );
};

export default AlbumForm;
