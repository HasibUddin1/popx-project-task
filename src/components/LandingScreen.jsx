import { Link } from "react-router-dom";


const LandingScreen = () => {
    return (
        <div className="h-screen flex flex-col justify-end w-9/12 mx-auto py-10">
            <h1 className="text-3xl font-bold">Welcome to PopX</h1>
            <p className="text-[#797c7f] font-semibold mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <Link to='/signUpScreen'><button className="bg-[#6c25ff] hover:bg-[#35009f] ease-in-out duration-200  px-6 py-2 rounded-md text-white font-bold mt-5 w-full">Create Account</button></Link>
            <Link to='/loginScreen'><button className="bg-[#cebafb] hover:bg-[#a57eff] ease-in-out duration-200  px-6 py-2 rounded-md font-bold block mt-3 w-full">Already Registered? Login</button></Link>
        </div>
    );
};

export default LandingScreen;