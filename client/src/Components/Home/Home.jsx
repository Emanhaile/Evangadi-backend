// import React, { useEffect, useState, useContext } from "react";
// import { FaUserCircle } from "react-icons/fa";
// import { MdArrowForwardIos } from "react-icons/md";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import axios from "../../axiosConfig";
// import { UserContext } from "../ContextAPI/Context";

// const Home = () => {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useContext(UserContext);
//   const id = useParams();
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     axios
//       .get("/questions/allquestions", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         console.log(response.data);
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log("Error:", error);
//       });
//   }, []);

//   return (
//     <div className="container-fluid my-10">
//       {/* Ask Questions and Welcome Section */}
//       <section className="container sm:block md:flex flex-row justify-between items-center max-w-[1400px] sm:mx-auto md:mx-32 mb-12">
//         <div>
//           <Link to="/question">
//             <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200">
//               Ask Questions
//             </button>
//           </Link>
//         </div>
//         <div className="mt-4 md:mt-0 text-lg font-semibold text-gray-700">
//           Welcome: {userData.username}
//         </div>
//       </section>

//       {/* Questions Section */}
//       <div className="sm:mx-4 md:mx-24 my-10 mb-80">
//         <h2 className="my-5 text-xl font-semibold text-gray-800">Questions</h2>

//         <section>
//           {/* Map through the data to display questions */}
//           {data.map((item) => (
//             <div className="border-b border-gray-300 py-4" key={item.questionid}>
//               <div className="md:flex justify-between items-center">
//                 <div className="md:flex items-center">
//                   {/* User Icon and Name */}
//                   <div className="mr-6">
//                     <FaUserCircle size={60} className="text-gray-500" />
//                     <div className="text-sm text-gray-700">{item.username}</div>
//                   </div>

//                   {/* Question Title */}
//                   <div className="text-md font-medium text-gray-900 mt-4 md:mt-0">
//                     {item.title}
//                   </div>
//                 </div>

//                 {/* Arrow to navigate to answers */}
//                 <Link to={`answer/${item.questionid}`} className="mt-4 md:mt-0">
//                   <div className="text-gray-500 hover:text-gray-800 transition">
//                     <MdArrowForwardIos size={30} />
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState, useContext } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from '../../axiosConfig';
import { UserContext } from "../ContextAPI/Context";


const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useContext(UserContext);
  const id = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('/questions/allquestions', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        console.log(response.data);
        setData(response.data.questions);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <div className='container-fluid '>
      <section className='container sm:block md:flex flex-row justify-between  sm:mx-auto md:mx-32'>
        <div className='py-4'>
          <Link to='/question'>
            <button className='text-white bg-blue-600 px-10 py-2 rounded'>Ask Questions</button>
          </Link>
        </div>
        {/* Make sure userData and userData.username are defined */}
        {userData && userData.username && (
          <div className='px-32'>
            Welcome: {userData.username}
          </div>
        )}
      </section>
      <div className='sm:mx-0 md:mx-24 my-10 mb-80 text-2xl '>
        <h2 className='my-4 text-sm'>Questions</h2>
        <section className=''>
          <div className='' key='id'>
            {/* Render the fetched data */}
            {data.map(item => (
              <div className='border-b border-gray-300' key={item.questionid}>
                <div className='md:flex justify-between max-w-full'>
                  <div className='md:flex justify-around'>
                    <div className='mr-10'>
                      <FaUserCircle size={80} />
                      <div className='text-sm'>{item.username}</div>
                    </div>
                    <div className='text-sm mt-5'>{item.title}</div>
                  </div>
                  <Link to={`answer/${item.questionid}`}>
                    <div className=''>
                      <MdArrowForwardIos size={30} />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;