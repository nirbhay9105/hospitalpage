import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form from reloading the page
    if (email === 'siddhunirbhay@gmail.com' && password === 'Mit1234') {
      setMessage('Login successful!');
      setMessageType('success');
      setTimeout(() => {
        setMessage(null);
        setMessageType(null);
        navigate('/');
      }, 1500);
    } else {
      setMessage('Invalid email or password');
      setMessageType('error');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="p-8 bg-white shadow-md rounded-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </form>

      {message && (
        <div
          className={`mt-4 px-4 py-2 rounded text-white font-medium ${
            messageType === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
