import React from "react";
import { FaRegSadTear } from "react-icons/fa"; /* يمكنك استخدام أيقونات من react-icons*/
import ImageError from "../../assets/images/ErrorPage.png";
 
const ErrorPage = ({ ErrorMassage }) => {
  return (
    <div class="ErrorPageContainer">
      <div class="ContainerImg w-2/4 h-125">
        <img
          src={ImageError}
          alt="Error"
          className="w-100 max-w-md h-[40rem] object-cover border"
        />
      </div>
      <div class="w-2/4 h-125 flex-col justify-center text-center mt-[12rem]">
        <FaRegSadTear className="text-6xl text-red-500 mb-4 flex justify-center ml-[14rem]" />
        <h1 className="text-4xl font-bold dark:text-white mb-2 text-slate-600">
          Oops! Something went wrong.
        </h1>
        <p className="text-xl dark:text-red-300 mb-4 text-red-600 font-bold">
          {ErrorMassage}
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
