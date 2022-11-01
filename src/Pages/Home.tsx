import Navbar from "../Components/Navbar";
import React from 'react';
import { useForm } from 'react-hook-form';


let renderCount: number = 0;

interface FormValues {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    developer: string;
}

const Home = () => {
    renderCount++;

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    console.log(errors);

    return ( 
        <div className="container w-full h-full items-center justify-center ">
            <Navbar />
            <form onSubmit={handleSubmit((data) => console.log(data))} className="w-4/12 h-full flex flex-col items-start justify-center mx-auto my-4 p-7  bg-gray-900 rounded-[15px]">
               <label htmlFor="firstName" className="text-white">First Name:</label>
               <input {...register("firstName", { required: "This is required" })}  id="firstName" className="border-slate-200 w-full p-2 my-3" />
               { errors.firstName && <p className="text-white mb-3">{errors.firstName.message}</p>  }

               <label htmlFor="lastName" className="text-white">Last Name:</label>
               <input {...register("lastName", {
                 required: "this is rquired", 
                 maxLength: {value: 4, message: "exceeded length"} } )} 
                 id="lastName" className="border-slate-200 w-full p-2 my-3" />

               <label htmlFor="age" className="text-white">Age:</label>
               <input {...register("age", { valueAsNumber: true })} type="number" id="age" className="border-slate-200 w-full p-2 my-3" />

               <label htmlFor="gender" className="text-white">Gender</label>
               <select {...register("gender")} id="option" className="p-2 my-3">
                    <option value="">Option...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
               </select>

               <label htmlFor="developer" className="text-white">Are you a developer?</label>
               <input {...register("developer")} id="developer" type="checkbox" value="yes" className="border-slate-200 p-2 my-3" />

                <button className="btn text-white" type="submit">Submit</button>
            </form>
        </div>
     );
}
 
export default Home;