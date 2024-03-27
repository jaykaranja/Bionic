import { useNavigate } from 'react-router-dom'

type IProps = {
    switchModes: () => void
}

const SignUp = ({
    switchModes
}: IProps) => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center w-full h-full">
        <div className='w-[30%] h-3/4 py-8 px-14 border-2 rounded-3xl flex flex-col items-center justify-between gap-4'>
            <div className="flex flex-col gap-2 items-center">
                {/* <img src={logo} className='w-24 h-16 box-border'/> */}
                <p className="font-bold text-2xl text-white">
                    Hey there ✨
                </p>
                <p className="font-bold text-sm text-white text-center w-3/4">
                    Enter your details to get signed in to your account
                </p>
            </div>
            <div className='w-full flex flex-col gap-2'>
                <div className="flex flex-col gap-1 w-full">
                    <p className="text-sm font-semibold text-white/50">Email address or username</p>
                    <input 
                        type="text" 
                        className="bg-gray-100 border-2 w-full h-8 rounded-lg outline-none px-4 text-sm" 
                        placeholder="Email address or username"
                    />
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <p className="text-sm font-semibold text-white/50">Password</p>
                    <input 
                        type="text" 
                        className="bg-gray-100 border-2 w-full h-8 rounded-lg outline-none px-4 text-sm"
                        placeholder="Password"
                    />
                </div>
            </div>
            <p className="font-bold text-sm text-white text-center">
                This information will be securely saved as per the terms & conditions and privacy policy.
            </p>
            <div className="flex gap-2 w-full">
                <button onClick={switchModes} className="text-white border-2 px-6 py-2 w-3/4 rounded-md">Existing user?</button>
                <button onClick={() => navigate('/')} className=" bg-success text-light px-6 py-2 w-full rounded-md">Next</button>
            </div>
        </div>
    </div>
  )
}

export default SignUp