import TopCard from "../../components/Dashboard/TopCard"
import Navigator from "../../components/Shared/Navigator/Navigator"

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col gap-6 rounded-xl p-4 bg-[#141414]'>
        <div className="flex items-center gap-4">
          <Navigator />
          {/* <p className='text-xl font-medium text-lime'>
            Hey Linzey✨
          </p> */}
          <p className="bg-secondary/50 px-4 py-1 font-semibold rounded-2xl hover:bg-secondary hover: cursor-pointer transition text-sm text-lime h-full flex items-center">Music</p>
          <p className="bg-secondary/50 px-4 py-1 font-semibold rounded-2xl hover:bg-secondary hover: cursor-pointer transition text-sm text-lime h-full flex items-center">Library</p>
          <p className="bg-secondary/50 px-4 py-1 font-semibold rounded-2xl hover:bg-secondary hover: cursor-pointer transition text-sm text-lime h-full flex items-center">Favorites</p>
        </div>
        <div className="flex gap-4 gap-x-3 flex-wrap w-full h-full overflow-auto" id="scrollbar">
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="HipHop"
                imageUrl="https://media.istockphoto.com/id/1304673834/photo/stylish-sportive-girl-dancing-hip-hop-in-stylish-clothes-on-colorful-background-at-dance-hall.jpg?s=612x612&w=0&k=20&c=H_tMASo4UYLi3t8F6CEFkQ2C00rcFOTxQyRCyxHNZCM="
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Pop"
                imageUrl="https://i.pinimg.com/736x/22/87/1a/22871a333151e155def4176a18d20020.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Afrobeats"
                imageUrl="https://i.pinimg.com/564x/cc/7f/5f/cc7f5f60125919cfbfc9ba8cfdc81e51.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Amapiano"
                imageUrl="https://i.pinimg.com/564x/cc/aa/ad/ccaaad93e9c394a65ec9cd46e9e1a239.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Rock"
                imageUrl="https://i.pinimg.com/564x/26/73/1d/26731df8ff7b87637f17cf8add84167e.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="RnB"
                imageUrl="https://i.pinimg.com/564x/f7/e3/8f/f7e38f6d064bf7ff0f266f9670aaecb0.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="GengeTone"
                imageUrl="https://i.pinimg.com/564x/3b/e0/cc/3be0ccfe30a8b77df19770791a1ccad9.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Gospel"
                imageUrl="https://i.pinimg.com/564x/cf/f8/18/cff8189e5ee37b561710512eb4fed6a9.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Vernacular"
                imageUrl="https://i.pinimg.com/564x/c8/73/58/c873585cea12f40a968ba70494be7a24.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="HipHop"
                imageUrl="https://media.istockphoto.com/id/1304673834/photo/stylish-sportive-girl-dancing-hip-hop-in-stylish-clothes-on-colorful-background-at-dance-hall.jpg?s=612x612&w=0&k=20&c=H_tMASo4UYLi3t8F6CEFkQ2C00rcFOTxQyRCyxHNZCM="
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Pop"
                imageUrl="https://i.pinimg.com/736x/22/87/1a/22871a333151e155def4176a18d20020.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Afrobeats"
                imageUrl="https://i.pinimg.com/564x/cc/7f/5f/cc7f5f60125919cfbfc9ba8cfdc81e51.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Amapiano"
                imageUrl="https://i.pinimg.com/564x/cc/aa/ad/ccaaad93e9c394a65ec9cd46e9e1a239.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Rock"
                imageUrl="https://i.pinimg.com/564x/26/73/1d/26731df8ff7b87637f17cf8add84167e.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="RnB"
                imageUrl="https://i.pinimg.com/564x/f7/e3/8f/f7e38f6d064bf7ff0f266f9670aaecb0.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="GengeTone"
                imageUrl="https://i.pinimg.com/564x/3b/e0/cc/3be0ccfe30a8b77df19770791a1ccad9.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Gospel"
                imageUrl="https://i.pinimg.com/564x/cf/f8/18/cff8189e5ee37b561710512eb4fed6a9.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Vernacular"
                imageUrl="https://i.pinimg.com/564x/c8/73/58/c873585cea12f40a968ba70494be7a24.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="HipHop"
                imageUrl="https://media.istockphoto.com/id/1304673834/photo/stylish-sportive-girl-dancing-hip-hop-in-stylish-clothes-on-colorful-background-at-dance-hall.jpg?s=612x612&w=0&k=20&c=H_tMASo4UYLi3t8F6CEFkQ2C00rcFOTxQyRCyxHNZCM="
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Pop"
                imageUrl="https://i.pinimg.com/736x/22/87/1a/22871a333151e155def4176a18d20020.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Afrobeats"
                imageUrl="https://i.pinimg.com/564x/cc/7f/5f/cc7f5f60125919cfbfc9ba8cfdc81e51.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Amapiano"
                imageUrl="https://i.pinimg.com/564x/cc/aa/ad/ccaaad93e9c394a65ec9cd46e9e1a239.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Rock"
                imageUrl="https://i.pinimg.com/564x/26/73/1d/26731df8ff7b87637f17cf8add84167e.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="RnB"
                imageUrl="https://i.pinimg.com/564x/f7/e3/8f/f7e38f6d064bf7ff0f266f9670aaecb0.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="GengeTone"
                imageUrl="https://i.pinimg.com/564x/3b/e0/cc/3be0ccfe30a8b77df19770791a1ccad9.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Gospel"
                imageUrl="https://i.pinimg.com/564x/cf/f8/18/cff8189e5ee37b561710512eb4fed6a9.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Vernacular"
                imageUrl="https://i.pinimg.com/564x/c8/73/58/c873585cea12f40a968ba70494be7a24.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="HipHop"
                imageUrl="https://media.istockphoto.com/id/1304673834/photo/stylish-sportive-girl-dancing-hip-hop-in-stylish-clothes-on-colorful-background-at-dance-hall.jpg?s=612x612&w=0&k=20&c=H_tMASo4UYLi3t8F6CEFkQ2C00rcFOTxQyRCyxHNZCM="
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Pop"
                imageUrl="https://i.pinimg.com/736x/22/87/1a/22871a333151e155def4176a18d20020.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Afrobeats"
                imageUrl="https://i.pinimg.com/564x/cc/7f/5f/cc7f5f60125919cfbfc9ba8cfdc81e51.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Amapiano"
                imageUrl="https://i.pinimg.com/564x/cc/aa/ad/ccaaad93e9c394a65ec9cd46e9e1a239.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Rock"
                imageUrl="https://i.pinimg.com/564x/26/73/1d/26731df8ff7b87637f17cf8add84167e.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="RnB"
                imageUrl="https://i.pinimg.com/564x/f7/e3/8f/f7e38f6d064bf7ff0f266f9670aaecb0.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="GengeTone"
                imageUrl="https://i.pinimg.com/564x/3b/e0/cc/3be0ccfe30a8b77df19770791a1ccad9.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Gospel"
                imageUrl="https://i.pinimg.com/564x/cf/f8/18/cff8189e5ee37b561710512eb4fed6a9.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Vernacular"
                imageUrl="https://i.pinimg.com/564x/c8/73/58/c873585cea12f40a968ba70494be7a24.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="HipHop"
                imageUrl="https://media.istockphoto.com/id/1304673834/photo/stylish-sportive-girl-dancing-hip-hop-in-stylish-clothes-on-colorful-background-at-dance-hall.jpg?s=612x612&w=0&k=20&c=H_tMASo4UYLi3t8F6CEFkQ2C00rcFOTxQyRCyxHNZCM="
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Pop"
                imageUrl="https://i.pinimg.com/736x/22/87/1a/22871a333151e155def4176a18d20020.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Afrobeats"
                imageUrl="https://i.pinimg.com/564x/cc/7f/5f/cc7f5f60125919cfbfc9ba8cfdc81e51.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Amapiano"
                imageUrl="https://i.pinimg.com/564x/cc/aa/ad/ccaaad93e9c394a65ec9cd46e9e1a239.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Rock"
                imageUrl="https://i.pinimg.com/564x/26/73/1d/26731df8ff7b87637f17cf8add84167e.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="RnB"
                imageUrl="https://i.pinimg.com/564x/f7/e3/8f/f7e38f6d064bf7ff0f266f9670aaecb0.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="GengeTone"
                imageUrl="https://i.pinimg.com/564x/3b/e0/cc/3be0ccfe30a8b77df19770791a1ccad9.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Gospel"
                imageUrl="https://i.pinimg.com/564x/cf/f8/18/cff8189e5ee37b561710512eb4fed6a9.jpg"
              />
            </div>
            <div className="shadow-md w-[19%] h-[250px] flex items-end rounded-lg relative">
              <TopCard 
                title="Vernacular"
                imageUrl="https://i.pinimg.com/564x/c8/73/58/c873585cea12f40a968ba70494be7a24.jpg"
              />
            </div>
        </div>
    </div>
  )
}

export default Home