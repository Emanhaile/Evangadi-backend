import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../axiosConfig';
import { UserContext } from '../ContextAPI/Context';



const Login = () => {
  const navigate = useNavigate();
  const emailDOM = useRef();
  const passwordDOM = useRef();
  const [userData, setUserData] = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = emailDOM.current.value;
    const passwordValue = passwordDOM.current.value;

    if (!emailValue || !passwordValue) {
      alert("Please enter all required fields");
      return;
    }

    try {
      const { data } = await axios.post('/user/login/', {
        email: emailValue,
        password: passwordValue,
      });
      setUserData({ data });
      
      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (error) {
      console.log(error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className=" banner min-h-screen flex flex-col md:flex-row items-start justify-center bg-[#F5F5F5] p-4">
      {/* Login Form */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full mx-2 mb-2 mt-12"> {/* Reduced mb-4 to mb-2 */}
        <h2 className="text-2xl font-semibold text-center mb-4">Login into your Account</h2>
        <p className="text-center mb-6">
          Don't have an account? <Link to='/signup' className='text-blue-500 hover:underline'>Create an account</Link>
        </p>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <input
              className='form-input block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              type='email'
              placeholder='Email'
              name='email'
              ref={emailDOM}
              required
            />
          </div>
          <div className='mb-4'>
            <input
              type='password'
              className='form-input block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Password'
              name='password'
              ref={passwordDOM}
              required
            />
          </div>
          <button className='px-5 bg-[#ff8500] text-white py-2 rounded hover:bg-blue-700 transition duration-200'>
            Submit
          </button>
          <p className="mt-4 text-center">
            <Link to='/register' className='text-blue-500 hover:underline'>Create an account</Link>
          </p>
        </form>
      </div>

      {/* Description Section */}
      <div className='bg-[#F5F5F5]  mt-5 md:mt-0 md:ml-2 max-w-md w-full rounded-lg p-6'>
      <div className='mb-4'> {/* Removed margin top and bottom */}
          <h6 className='text-[#ff8500] font-semibold'>About</h6>
          <h1 className='text-lg font-semibold mb-2'>Evangadi Networks Q&A</h1>
          <p className='mb-2 text-gray-700'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum sint voluptas, illum iste repellat voluptates dignissimos ipsam accusamus maiores ratione numquam! Quasi itaque.
          </p>
          <p className='mb-2 text-gray-700'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente aliquam magnam cum tenetur tempora nulla rerum magni, doloribus, laudantium odit.
          </p>
          <p className='mb-2 text-gray-700'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime animi totam veniam debitis ut ipsa delectus.
          </p>
          <button className="px-5 bg-[#ff8500] text-white py-2 rounded hover:bg-blue-700 transition duration-200">
            HOW IT WORKS
          </button>
      </div>
      </div>
    </div>
  );
};

export default Login;

