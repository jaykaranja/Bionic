import { useCallback, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

type IProps = {
    switchModes: () => void
}

const SignIn = ({ 
    switchModes
}: IProps) => {
    const navigate = useNavigate()
    const [creds, setCreds] = useState({
        username: "",
        password: ""
    })

    const handleSignIn = useCallback(() => {
        axios.post('http://localhost:8000/api/token/', creds).then(response => {
            localStorage.setItem("token", response.data.token)
            navigate("/")
        }).catch(error => {
            console.error('Error:', error);
        })}, [creds, navigate]);

  return (
    <div className="flex items-center justify-center w-full h-full py-4">
        <div className='w-[30%] h-3/4 py-8 px-14 border-2 rounded-3xl flex flex-col items-center justify-between gap-4'>
            <div className="flex flex-col gap-2 items-center">
                {/* <img src={logo} className='w-24 h-16 box-border'/> */}
                <p className="font-bold text-2xl text-white">
                    Hey there ✨
                </p>
                <p className="font-bold text-sm text-white text-center">
                    Sign back in to get back to the beat.
                </p>
            </div>
            <div className='w-full flex flex-col gap-2'>
                <div className="flex flex-col gap-1 w-full">
                    <p className="text-sm font-semibold text-white">Email address or username</p>
                    <input 
                        type="text" 
                        className="bg-gray-100 border-2 w-full h-8 rounded-lg outline-none px-4 text-sm" 
                        placeholder="Email address or username"
                        value={creds.username}
                        onChange={(e) => setCreds((prev) => ({ ...prev, username: e.target.value}))}
                    />
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <p className="text-sm font-semibold text-white/50">Password</p>
                    <input 
                        type="password" 
                        className="bg-gray-100 border-2 w-full h-8 rounded-lg outline-none px-4 text-sm"
                        placeholder="Password"
                        value={creds.password}
                        onChange={(e) => setCreds((prev) => ({ ...prev, password: e.target.value}))}
                    />
                </div>
            </div>
            <p className="font-bold text-sm text-white text-center">
                This information will be securely saved as per the terms & conditions and privacy policy.
            </p>
            <div className="flex gap-2 w-full">
                <button onClick={switchModes} className="text-white border-2 px-6 py-2 w-3/4 rounded-md">New here?</button>
                <button onClick={handleSignIn} className=" bg-success text-light px-6 py-2 w-full rounded-md">Sign In</button>
            </div>
        </div>
    </div>
  )
}

export default SignIn