import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {

    const [loginEmail, setLoginEmail ] = useState('');
    const [loginPassword, setLoginPassword ] = useState('');

    const navigate =useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        try {
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        const user = userCredential.user;
        console.log(user);

    navigate('/');

    } catch(err) {
        console.log(err.message);
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form onSubmit={handleLogin} className='rounded-lg m-4 py-4 px-6 border w-4/6 md:w-1/2 lg:w-1/4 bg-white'>

            <div className='flex flex-col'>
            <div className='mb-5 flex-1 flex justify-center'>
            <label><h1 className='flex-1 font-semibold text-lg'>Sign Up</h1></label>
            </div>

            <div className='mb-5 flex-1'>
            <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='email'>Email *</label>
            <input value={loginEmail} onChange={(e)=> setLoginEmail(e.target.value)} type="text" name="email" required className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
            </div>

            <div className='mb-5 flex-1'>
            <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='password'>Password *</label>
            <input value={loginPassword} onChange={(e)=> setLoginPassword(e.target.value)} type="password" name="password" required className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"/>
            </div>

            <div className='mb-5 flex-1 flex justify-between'>
            <div className='text-sm font-normal py-2'>Placeholder</div>
            <button type='submit' className='text-sm font-normal rounded-sm hover:shadow-xl bg-gray-800 text-white py-2 px-4'>Sign In</button>
            </div>

            </div>
        </form>
        </div>
    )
}

export default Login;