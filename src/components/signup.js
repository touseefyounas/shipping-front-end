import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {

    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [fullname, setFullname ] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(user, {displayName: fullname});
        console.log(user);
        console.log(user.displayName);
        
        navigate('/');

        } catch(err) {
            console.log(err.message);
        }
    }
    

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className='rounded-lg m-4 py-4 px-6 border w-4/6 md:w-1/2 lg:w-1/4 bg-white'>

            <div className='flex flex-col'>
            <div className='mb-5 flex-1 flex justify-center'>
            <label><h1 className='flex-1 font-semibold text-lg'>Sign Up</h1></label>
            </div>

            <div className='mb-5 flex-1'>
            <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='full-name'>Full Name</label>
            <input value={fullname} onChange={(e)=> setFullname(e.target.value)} type="text" name="full-name" className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
            </div>

            <div className='mb-5 flex-1'>
            <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='email'>Email *</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="text" name="email" required className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
            </div>

            <div className='mb-5 flex-1'>
            <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='password'>Password *</label>
            <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" name="password" required className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"/>
            </div>

            <div className='mb-5 flex-1 flex justify-between'>
            <div className='text-sm font-normal py-2'>Already a User?<Link to='/login' className="font-semibold"> Sign In</Link></div>
            <button type='submit' className='text-sm font-normal rounded-sm hover:shadow-xl bg-gray-800 text-white py-2 px-4'>Sign Up</button>
            </div>

            </div>
        </form>
        </div>
    );
}


export default SignUp;