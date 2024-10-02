import React, { useState } from "react";
import Link from "next/link";
import axios from 'axios'

function Auth(){

    const [modal, setModal] = useState(false);
    const [loginUserId, setLoginUserId] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const onCloseLoginModal = (e) => {
        e.preventDefault();
        alert("Modal Close!!!");
    }

    const onLogin = async () => {
        const response = await axios.post('api/auth/login', { userId : loginUserId, password: loginPassword});
        const data = await response.data;
        console.log(data.userId);
    }

    const toRegisterModal = () => {
        setModal(true);
    }

    const onRegister = () => {

    }

    const toLoginModal = () => {
        setModal(false);
    }



    return (
        <div className="md:container m-auto">
            <div className={`max-w-md m-auto mt-48 ${ !modal ? '' : 'hidden'}`}>
                <div className="bg-[#0249AC] rounded-t-lg flex justify-between">
                    <div className="">
                        <p className="text-3xl text-white p-2.5 font-medium">Log in</p>
                    </div>
                    <div className="flex">
                        <a 
                            className="text-3xl text-white p-2.5 font-medium flex items-center hover:animate-spin"
                            onClick={onCloseLoginModal}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </a>
                    </div>
                    
                </div>
                <div className="border-b-[1px] border-l-[1px] border-r-[1px] border-slate-500 border-solid bg-white p-8 rounded-b-lg select-none">
                    <form>
                        <div className="pb-9">
                            <h4 className="pb-3 text-slate-500">User ID</h4>
                            <input 
                                className="text-base border-solid border-b-[1px] w-full hover:border-b-[#0249AC] outline-none pb-0.5"
                                type="text"
                                onChange={e => setLoginUserId(e.target.value)}
                            />
                        </div>
                        <div className="pb-4">
                            <h4 className="pb-3 text-slate-500">Password</h4>
                            <input 
                                className="text-base border-solid border-b-[1px] w-full hover:border-b-[#0249AC] outline-none pb-0.5"
                                type="password"
                                onChange={e => setLoginPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-between mb-6">
                            <div className="hover:text-gray-400">
                                <input 
                                    type="checkbox"
                                    id="rememberMe"
                                    className="mr-2 hover:cursor-pointer mt-1"
                                /> 
                                <label htmlFor="rememberMe" className="hover:cursor-pointer select-none">Remember Me</label>
                            </div>
                            <div>
                                <Link href="/auth/login" className="hover:text-sky-400/75">Forget Password?</Link>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="button"
                                className="w-56 rounded-full bg-[#0249AC] text-white text-lg pl-20 pr-20 pt-2 pb-2"
                                onClick={onLogin}
                            >
                                Log in                                
                            </button>
                        </div>
                        <div className="text-center mt-4 mb-4 border-b-[1px]"></div>
                        <div className="flex justify-center">
                            <button
                                type="button"
                                className="w-56 rounded-full bg-[#ED4627] text-white text-lg pl-20 pr-20 pt-2 pb-2 text-center"
                                onClick={toRegisterModal}                               
                            >
                                Register                            
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={`max-w-md m-auto mt-36 ${ modal ? '' : 'hidden' }`}>
                <div className="bg-[#0249AC] rounded-t-lg flex justify-between">
                    <div className="">
                        <p className="text-3xl text-white p-2.5 font-medium">Register</p>
                    </div>
                    <div className="flex">
                        <a 
                            className="text-3xl text-white p-2.5 font-medium flex items-center hover:animate-spin"
                            onClick={onCloseLoginModal}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </a>
                    </div>
                    
                </div>
                <div className="border-b-[1px] border-l-[1px] border-r-[1px] border-slate-500 border-solid bg-white p-8 rounded-b-lg select-none">
                    <form>
                        <div className="pb-9">
                            <h4 className="pb-3 text-slate-500">User ID</h4>
                            <input 
                                className="text-base border-solid border-b-[1px] w-full hover:border-b-[#0249AC] focus:border-b-[#0249AC] outline-none pb-0.5"
                                type="text"
                                id="register_userid"
                            />
                        </div>
                        <div className="pb-9">
                            <h4 className="pb-3 text-slate-500 ">Email</h4>
                            <input 
                                className="text-base border-solid border-b-[1px] w-full hover:border-b-[#0249AC] focus:border-b-[#0249AC] outline-none pb-0.5"
                                type="email"
                                id="resigter_email"
                            />
                        </div>
                        <div className="pb-9">
                            <h4 className="pb-3 text-slate-500">Password</h4>
                            <input 
                                className="text-base border-solid border-b-[1px] w-full hover:border-b-[#0249AC] focus:border-b-[#0249AC] outline-none pb-0.5"
                                type="password"
                                id="register_password"
                            />
                        </div>
                        <div className="pb-9">
                            <h4 className="pb-3 text-slate-500">Confirm Password</h4>
                            <input 
                                className="text-base border-solid border-b-[1px] w-full hover:border-b-[#0249AC] focus:border-b-[#0249AC] outline-none pb-0.5"
                                type="password"
                                id="register_c_password"
                            />
                        </div>
                       
                        <div className="flex justify-center">
                            <button
                                type="button"
                                className="w-56 rounded-full bg-[#ED4627] text-white text-lg pl-20 pr-20 pt-2 pb-2 text-center"
                                onClick={onRegister}
                            >
                                Register                            
                            </button>
                        </div>                        
                        <div className="text-center mb-4 mt-4  border-b-[1px]"></div>
                        <div className="flex justify-center">
                            <button
                                type="button"
                                className="w-56 rounded-full bg-[#0249AC] text-white text-lg pl-20 pr-20 pt-2 pb-2"
                                onClick={toLoginModal}
                            >
                                Log in                                
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Auth;