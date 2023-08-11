import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const LoginScreen = () => {

    const { signIn } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(() => {
                Swal.fire({
                    title: 'Success',
                    text: 'Your have successfully logged in',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate('/profile')
            })
    }

    return (
        <div className="w-9/12 mx-auto py-10">
            <h1 className="text-3xl font-bold">Sign in to your PopX Account</h1>
            <p className="text-[#797c7f] font-semibold mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <form onSubmit={handleLogin}>
                <fieldset className="border rounded-md px-4 mt-5">
                    <legend className="text-[#9969fd] font-semibold">Email Address</legend>
                    <input className="w-full py-1" type="email" name="email" placeholder="Enter email address" required />
                </fieldset>
                <fieldset className="border rounded-md px-4 mt-3">
                    <legend className="text-[#9969fd] font-semibold">Password</legend>
                    <input className="w-full py-1" type="password" name="password" placeholder="Enter password" required />
                </fieldset>
                <input className="mt-5 px-4 py-2 bg-[#6c25ff] hover:bg-[#35009f] ease-in-out duration-200 text-white rounded-md w-full cursor-pointer" type="submit" value="Login" />
            </form>
        </div>
    );
};

export default LoginScreen;