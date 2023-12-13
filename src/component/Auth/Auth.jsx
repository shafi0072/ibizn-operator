import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from "react-hook-form"

const Auth = () => {

     const { register, handleSubmit, formState: { errors } } = useForm();
     const onSubmit = data => console.log(data);
     console.log(errors);

     const [active, setActive] = useState('Sign Up')

     return (
          <div>
               <section className="bg-gray-50">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                         <div className="w-full bg-gray-600 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                   <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-white md:text-2xl">
                                        {active} Now
                                   </h1>
                                   <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                                        {
                                             active === 'Log In' ? <div></div>
                                                  :
                                                  <div>
                                                       <label for="email" className="block mb-2 text-sm font-medium text-white ">Name</label>
                                                       <input type="text" placeholder="name" {...register("name", { required: true, minLength: 2, maxLength: 80 })} className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                                       {errors.name?.type === 'required' && <p className="text-red-600">Name is required</p>}
                                                       {errors.name?.type === 'minLength' && <p className="text-red-600">Name must be at least 2 characters</p>}
                                                       {errors.name?.type === 'maxLength' && <p className="text-red-600">Name cannot exceed 80 characters</p>}
                                                  </div>
                                        }
                                        {
                                             active === 'Log In' ? <div></div>
                                                  :
                                                  <div>
                                                       <label for="password" className="block mb-2 text-sm font-medium text-white">Number</label>
                                                       <input type="tel" placeholder="Mobile number" {...register("number", { required: true, minLength: 6, maxLength: 12 })} className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />{errors.number?.type === 'required' && <p className="text-red-600">Number is required</p>}
                                                       {errors.number?.type === 'minLength' && <p className="text-red-600">Number must be at least 6 characters</p>}
                                                       {errors.number?.type === 'maxLength' && <p className="text-red-600">Number cannot exceed 12 characters</p>}
                                                  </div>
                                        }
                                        <div>
                                             <label for="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                                             <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                        </div>
                                        <div>
                                             <label for="confirm-password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                             <input type="password"  {...register("password", {
                                                  required: true,
                                                  minLength: 6,
                                                  maxLength: 20,
                                                  pattern: /(?=.*[0-9])/
                                             })} placeholder="password"
                                                  className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                             {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                             {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                        </div>
                                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium border rounded-lg text-sm px-5 py-2.5 text-center">{active}</button>
                                        {
                                             active === 'Sign Up'
                                                  ?
                                                  <p className="text-sm font-light text-white cursor-pointer">
                                                       Already have an account? <span onClick={() => { setActive('Log In') }} className="font-medium text-primary-600 hover:underline ">Login here</span>
                                                  </p>
                                                  :
                                                  <p className="text-sm font-light text-white cursor-pointer">
                                                       Are You New? <span onClick={() => { setActive('Sign Up') }} className="font-medium text-primary-600 hover:underline">Sign Up here</span>
                                                  </p>
                                        }
                                   </form>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default Auth;