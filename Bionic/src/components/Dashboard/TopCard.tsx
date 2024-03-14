import { FaPlay } from "react-icons/fa";

type Props = {
    title: string;
    imageUrl: string
}

function TopCard(props: Props) {
  return (
    <div className="w-full h-full font-semibold text-lg rounded-md hover:cursor-pointer">
        <div className="absolute w-full h-full">
            <img 
                src={props.imageUrl}
                className="h-full w-full rounded-xl shadow-lg hover:-translate-x-2 transition-all duration-150"
            />
        </div>
        <div className="z-30 absolute h-full w-full flex items-end justify-between px-6 py-4">
            <p className="text-white font-semibold text-xl pb-2">
                {props.title}
            </p>
            <div className="rounded-full shadow-xl p-4 bg-[#0bcbcb] hover:bg-[#0bcbcbb4] transition duration-300">
                <FaPlay color="black"/>
            </div>
        </div>
    </div>
  )
}

export default TopCard