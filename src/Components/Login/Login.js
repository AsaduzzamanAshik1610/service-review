import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Context/Authprovider';

const Login = () => {
    const {signIn} = useContext(Authcontext);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event=>{
         event.preventDefault()
         const form = event.target;
         const email = form.email.value;
         const password = form.password.value;
         signIn(email,password)
         .then(result=>{
            const user = result.user;
            const currentUser = {
                email:user.email
             
            }
            navigate(from, {replace:true})
            console.log(currentUser);
         })
         .catch(err=> console.error(err))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-black mt-5">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-orange-600">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div>
                        <p className='mb-3'>Allready have an account?<Link to='/register' className='text-blue-600'>sign up</Link></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;