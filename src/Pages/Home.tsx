import Navbar from "../Components/Navbar";
import React from 'react';
import { useForm } from 'react-hook-form';


let renderCount: number = 0;

const Home = () => {
    renderCount++;

    return ( 
        <div className="container w-full h-full items-center justify-center ">
            <Navbar />
            <form className="w-8/12 h-full flex flex-col items-center justify-center mx-auto my-4 p-4  bg-gray-900 rounded-[15px]">
               <label htmlFor="firstName" className="text-white">First Name:</label>
               <input name="firstName" id="firstName" className="border-slate-200" />

               <label htmlFor="lastName" className="text-white">Last Name:</label>
               <input name="lastName" id="lastName" className="border-slate-200" />

               <label htmlFor="age" className="text-white">Age:</label>
               <input type="number" name="age" id="age" className="border-slate-200" />
            </form>
        </div>
     );
}
 
export default Home;