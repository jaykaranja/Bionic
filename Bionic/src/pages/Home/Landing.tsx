import usePortalView from "../../hooks/usePortalView"
import Modal from "../../components/modals/Modal"
import SignIn from "../Authentication/SignIn"
import SignUp from '../Authentication/SignUp';
import { useCallback } from "react";

const Landing = () => {
    const signInCard = usePortalView()
    const signUpCard = usePortalView()
    const switchModes = useCallback(
      () => {
        signInCard.toggle()
        signUpCard.toggle()
      },
      [signInCard, signUpCard],
    )
    
  return (
    <div 
        className='w-screen h-screen px-10 flex flex-col gap-10 items-start justify-center'
        style={{
            backgroundImage: "url(./src/assets/home-splash.jpg)",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}
    >
        <p className='text-8xl text-[#E05700] font-bold'>Bionic</p>
        <p className='text-4xl text-white max-w-[40%]'>Let your favorite music follow you, eveywhere.</p>
        <button onClick={signInCard.toggle} className='px-1 py-4 text-lg tracking-wide font-bold hover:cursor-pointer bg-[#E05700] text-white rounded-md w-[15%]'>
            Listen
        </button>
        {signInCard.isOpen && (
            <Modal>
                <SignIn 
                    switchModes={switchModes}
                />
            </Modal>
        )}
        {signUpCard.isOpen && (
            <Modal>
                <SignUp 
                    switchModes={switchModes}
                />
            </Modal>
        )}
    </div>
  )
}

export default Landing