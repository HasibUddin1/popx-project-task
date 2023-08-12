import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const SignUpScreen = () => {

    const { createUser, updateUserName } = useContext(AuthContext)

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleSignUp = event => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        setError('')
        createUser(email, password)
            .then(result => {
                const registeredUser = result.user

                updateUserName(registeredUser, name)
                    .then(() => {
                        Swal.fire({
                            title: 'Success',
                            text: 'Your account has been created successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                        navigate('/profile')
                    })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    return (
        <div className="w-9/12 mx-auto p-10">
            <h1 className="text-3xl font-bold">Create your PopX account</h1>
            <form onSubmit={handleSignUp}>
                <fieldset className="border rounded-md px-4 mt-5">
                    <legend className="text-[#9969fd] font-semibold">Full Name<span className="text-red-600">*</span></legend>
                    <input className="w-full py-1" type="text" name="name" placeholder="Enter your name" required />
                </fieldset>
                <fieldset className="border rounded-md px-4 mt-5">
                    <legend className="text-[#9969fd] font-semibold">Phone Number<span className="text-red-600">*</span></legend>
                    <input className="w-full py-1" type="text" name="phone" placeholder="Enter your name" required />
                </fieldset>
                <fieldset className="border rounded-md px-4 mt-5">
                    <legend className="text-[#9969fd] font-semibold">Email Address<span className="text-red-600">*</span></legend>
                    <input className="w-full py-1" type="email" name="email" placeholder="Enter your name" required />
                </fieldset>
                <fieldset className="border rounded-md px-4 mt-5">
                    <legend className="text-[#9969fd] font-semibold">Password<span className="text-red-600">*</span></legend>
                    <input className="w-full py-1" type="password" name="password" placeholder="Enter your name" required />
                </fieldset>
                <fieldset className="border rounded-md px-4 mt-5">
                    <legend className="text-[#9969fd] font-semibold">Company Name</legend>
                    <input className="w-full py-1" type="text" name="companyName" placeholder="Enter your name" />
                </fieldset>

                <h2 className="mt-3 font-semibold">Are you an Agency?<span className="text-red-600">*</span></h2>
                <div className="flex gap-3">
                    <label className="flex gap-3" htmlFor="yes">
                        <input type="radio" name="agency" id="yes" />
                        <p>Yes</p>
                    </label>
                    <label className="flex gap-3" htmlFor="no">
                        <input type="radio" name="agency" id="no" />
                        <p>No</p>
                    </label>
                </div>
                <input className="mt-5 px-4 py-2 bg-[#6c25ff] hover:bg-[#35009f] ease-in-out duration-200 text-white rounded-md w-full cursor-pointer" type="submit" value="Create Account" />
                {error && <p className="text-red-600 font-bold">{error}</p>}
            </form>
        </div>
    );
};

export default SignUpScreen;