

const LandingScreen = () => {
    return (
        <div className="h-screen flex flex-col justify-end">
            <h1 className="text-3xl font-bold">Welcome to PopX</h1>
            <p className="text-[#797c7f] font-semibold">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit</p>
            <button className="bg-[#6c25ff] px-6 py-2 rounded-md text-white font-bold">Create Account</button>
            <button className="bg-[#cebafb] px-6 py-2 rounded-md font-bold block">Already Registered? Login</button>
        </div>
    );
};

export default LandingScreen;