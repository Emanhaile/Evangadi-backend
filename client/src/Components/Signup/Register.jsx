import React, { useRef } from "react";
import axios from "../../axiosConfig";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const userNameDom = useRef();
  const firstNameDom = useRef();
  const lastNameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    const usernameValue = userNameDom.current.value;
    const firstnameValue = firstNameDom.current.value;
    const lastnameValue = lastNameDom.current.value;
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;

    if (!usernameValue || !firstnameValue || !lastnameValue || !emailValue || !passValue) {
      alert("Please provide all required information");
      return;
    }

    try {
      await axios.post("/user/register", {
        username: usernameValue,
        firstname: firstnameValue,
        lastname: lastnameValue,
        email: emailValue,
        password: passValue,
      });

      alert("User registered successfully");
      navigate("/login");
    } catch (error) {
      alert("Something went wrong");
      console.log(error.response);
    }
  }

  return (
    <section className="container banner2 mx-auto mt-8 p-4 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-0 grid grid-cols-1 lg:grid-cols-2 mb-10">
      {/* Registration Form */}
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white border border-gray-300 p-4 shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold text-center">Join the network</h2>
          <div className="mt-4 text-center">
            Already have an account? 
            <Link to="/login" className="text-blue-600 hover:underline"> Login</Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email"></label>
              <input
                ref={emailDom}
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
              />
            </div>
            <div className=" flex flex-col sm:flex-row sm:space-x-4">
              <div className="flex-1 mb-2 sm:mb-0">
                <label className="block text-gray-700" htmlFor="first-name"></label>
                <input
                  ref={firstNameDom}
                  type="text"
                  id="first-name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="First name"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700" htmlFor="last-name"></label>
                <input
                  ref={lastNameDom}
                  type="text"
                  id="last-name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700" htmlFor="username"></label>
              <input
                ref={userNameDom}
                type="text"
                id="username"
                className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700" htmlFor="password"></label>
              <input
                ref={passwordDom}
                type="password"
                id="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">
              Agree and Join
            </button>
          </form>
          <div className="mt-4 text-center">
            I Agree to the 
            <Link to="/" className="text-blue-600 hover:underline"> privacy policy and terms of service</Link>
          </div>
          <div className="mt-4 text-center">
            <Link to="/login" className="text-blue-600 hover:underline">Already have an account? Login</Link>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="w-full max-w-md  bg-white  my-auto ">
        <h6 className="text-[#ff8500] font-semibold">About</h6>
        <h1 className="text-lg font-semibold mb-2">Evangadi Networks Q&A</h1>
        <p className="mb-2 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum sint voluptas, illum iste repellat voluptates dignissimos ipsam accusamus maiores ratione numquam! Quasi itaque.
        </p>
        <p className="mb-2 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente aliquam magnam cum tenetur tempora nulla rerum magni, doloribus, laudantium odit.
        </p>
        <p className="mb-2 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime animi totam veniam debitis ut ipsa delectus.
        </p>
        <button className="w-full bg-[#ff8500] text-white py-2 rounded hover:bg-blue-700 transition duration-200">
          HOW IT WORKS
        </button>
      </div>
    </section>
  );
}

export default Register;
