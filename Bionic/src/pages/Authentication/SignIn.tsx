import { useNavigate } from 'react-router-dom'
import logo from '../../assets/bionic.png'
import { useCallback, useState } from 'react'
import axios from 'axios'

const SignIn = () => {
    const navigate = useNavigate()
    const [creds, setCreds] = useState({
        username: "",
        password: ""
    })

    const handleSignIn = useCallback(() => {
        axios.post('http://localhost:8000/api/token/', creds).then(response => {
            console.log(response.data); // Token will be in response.data.token
            localStorage.setItem("token", response.data.token)
        }).catch(error => {
            console.error('Error:', error);
        })}, [creds]);

  return (
    <div className="flex items-center justify-center w-full h-full">
        <div className='w-[35%] h-max py-8 px-14 border-2 rounded-3xl flex flex-col items-center gap-4'>
            <div className="flex flex-col gap-2 items-center">
                <img src={logo} className='w-24 h-16 box-border'/>
                <p className="font-bold text-2xl text-secondary">
                    Hey there ✨
                </p>
                <p className="font-bold text-sm text-secondary/55 text-center">
                    Sign back in to get back to the beat.
                </p>
            </div>
            <div className="flex flex-col gap-1 w-full">
                <p className="text-sm font-semibold text-dark/50">Email address or username</p>
                <input 
                    type="text" 
                    className="bg-gray-100 border-2 w-full h-14 rounded-2xl outline-none px-4 text-lg" 
                    placeholder="Email address or username"
                    value={creds.username}
                    onChange={(e) => setCreds((prev) => ({ ...prev, username: e.target.value}))}
                />
            </div>
            <div className="flex flex-col gap-1 w-full">
                <p className="text-sm font-semibold text-dark/50">Password</p>
                <input 
                    type="password" 
                    className="bg-gray-100 border-2 w-full h-14 rounded-2xl outline-none px-4 text-lg"
                    placeholder="Password"
                    value={creds.password}
                    onChange={(e) => setCreds((prev) => ({ ...prev, password: e.target.value}))}
                />
            </div>
            <p className="font-bold text-sm text-secondary/55 text-center">
                This information will be securely saved as per the terms & conditions and privacy policy.
            </p>
            <div className="flex gap-2 w-full">
                <button onClick={() => navigate('/authentication/sign-up')} className="text-dark border-2 px-6 py-2 w-3/4 rounded-md">New here?</button>
                <button onClick={handleSignIn} className=" bg-success text-light px-6 py-2 w-full rounded-md">Sign In</button>
            </div>
        </div>
    </div>
  )
}

export default SignIn