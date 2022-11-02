import Navbar from "../Components/Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';


interface FormValues {
    name: string,
    age: number
}

let schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required("not a number"),
})

const ProgressiveImprove = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({resolver: yupResolver(schema) });

    console.log(errors);

    return (  
        <div className="container mx-auto w-full h-full">
            <Navbar />
            <div className="container w-full h-full m-4">
                <form onSubmit={handleSubmit((e) => {
                   console.log(e)
                })}
                className="w-1/3 mx-auto text-white m-4 p-4 rounded-xl  bg-black flex flex-col items-center justify-center">
                    <h2>Progressive Improve</h2>
                    <input {...register("name") } placeholder="Name" className="p-2 m-4 w-80 text-black"/>
                    <p>{errors?.name?.message}</p>
                    <input {...register("age")} placeholder="Age" className="p-2 m-4 w-80 text-black" type="number" />
                    <p>{errors?.age?.message}</p>
                    <button type="submit" className="bg-rose-800 py-3 px-4 rounded-xl mt-4">Submit</button>
                </form> 
            </div>
        </div>
    );
}
 
export default ProgressiveImprove;