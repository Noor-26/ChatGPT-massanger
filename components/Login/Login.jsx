'use client'

import { signIn } from "next-auth/react"
import { RiOpenaiFill } from "react-icons/ri";
const Login = () => {
 
const handleLogin = async () => {
    await signIn('google');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-md flex flex-col justify-center">
   
    <div className="mb-8 text-center">

       <RiOpenaiFill className="mx-auto text-7xl "/>
       <h1 className="text-3xl font-bold text-gray-800">Chatgpt</h1>
    </div>
      
 <button
    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 "
    onClick={handleLogin}
  >
   <p className="capitalize"> Sign In to use ChatGPT </p>
  </button>
      </div>
    </div>
  );
};


export default Login
