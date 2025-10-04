
import notfound from '../assets/onee.png'


import { Link } from 'react-router-dom'; // Optional: if you're using React Router

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative text-center px-6">
      <img src={notfound} alt="" className='mx-auto md:h-[80%] h-[50%] absolute md:-top-20  top-20' />
      
      <h2 className="text-4xl font-semibold text-gray-600  dark:text-amber-50 mb-2 mt-50">Page Not Found</h2>
      <p className="text-gray-600 dark:text-amber-50 mb-6">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-[#eb5e28] text-white px-3 py-1.5 rounded hover:bg-[#ef4e0e] font-semibold"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Notfound;
