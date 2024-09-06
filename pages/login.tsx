// pages/login.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import {  signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../libs/firebase'; // Import Firebase auth

const Login = () => {

  const [error, setError] = useState<string | null>(null);
  const router = useRouter();



  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // You can access user info here
      const user:any = result.user;
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: user.displayName,
            email: user.email,
            password: 'firebase-google-auth',
          }),

      });
      console.log(user.displayName)
  
      if (response.ok) {
        router.push('/');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to sign up with Google.');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.log(error)
      } else {
        setError('An unknown error occurred.');
      }
      
     
    } 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        {/* <form onSubmit={handleEmailLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </button>
      
        </form> */}
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
        <div className="mt-4 text-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full py-2 px-4 bg-blue-500 text-white  rounded-md shadow-sm hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign In with Google
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
