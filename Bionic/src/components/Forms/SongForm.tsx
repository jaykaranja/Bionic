import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';

const SongForm = ({ onClose, onSubmit }) => {
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [songName, setSongName] = useState('');
  const [songFile, setSongFile] = useState<FileList | null>(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ artist, album, songName, songFile });
    onClose();
  };

  return (
    <div className="h-full bg-bgSecondary shadow-md shadow-lime border-lime border w-[35%] flex flex-col px-8 py-6 rounded-lg gap-4">
        <div className='flex w-full justify-between items-center text-white'>
            <p className='font-bold text-lg'>Add song</p>
            <FaXmark className="self-end cursor-pointer" onClick={onClose} size={25} />
        </div>
        {/* <hr /> */}
        <form onSubmit={handleSubmit} className='flex flex-col justify-between h-full mt-2'>
          <div className='flex flex-col gap-6'>
              <div className="flex flex-col gap-2">
                  <label className='text-white'>Artist:</label>
                  <input type="text" className='h-10 bg-gray-600 rounded-md px-2 tracking-wider outline-none border-2 border-gray-600 caret-lime text-white font-light focus:border-2 focus:border-lime' value={artist} onChange={(e) => setArtist(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2">
                  <label className='text-white'>Album:</label>
                  <input type="text" className='h-10 bg-gray-600 rounded-md px-2 tracking-wider outline-none border-2 border-gray-600 caret-lime text-white font-light focus:border-2 focus:border-lime' value={album} onChange={(e) => setAlbum(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2">
                  <label className='text-white'>Song Name:</label>
                  <input type="text" className='h-10 bg-gray-600 rounded-md px-2 tracking-wider outline-none border-2 border-gray-600 caret-lime text-white font-light focus:border-2 focus:border-lime' value={songName} onChange={(e) => setSongName(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2">
                  <label className='text-white'>Song File:</label>
                  <input type="file" className='rounded-md px-2 outline-none' onChange={(e) => setSongFile(e?.target?.files[0])} />
              </div>
          </div>
          <button type="submit" className='w-1/2 bg-lime py-2 px-4 rounded-md self-center text-black'>Submit</button>
        </form>
    </div>
  );
};

export default SongForm;
