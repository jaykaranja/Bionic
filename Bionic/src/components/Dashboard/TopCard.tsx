import { useCallback } from "react";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {
    title: string;
    imageUrl: string
    guid: number
}

function TopCard(props: Props) {
    const navigate = useNavigate();
    const handleRedirect = useCallback((guid:string) => {
        navigate("genres/" + guid);
    }, [navigate])
  return (
    <div onClick={() => handleRedirect(props.guid)} className="w-full h-full font-semibold text-lg rounded-md hover:cursor-pointer">
        <div className="absolute w-full h-full bg-black">
            <img 
                src={props.imageUrl}
                className="h-full w-full rounded-xl opacity-90 shadow-lg hover:-translate-x-2 transition-all duration-150"
            />
        </div>
        <div className="z-30 absolute h-full w-full flex items-end justify-between px-4 py-2">
            <p className="text-white font-bold tracking-wide text-xl pb-2">
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