import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import userImage from '../assets/images/popx-project-image.jpg'
import Swal from "sweetalert2";
import { AiFillCamera } from "react-icons/ai";


const Profile = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Success',
                    text: 'You have successfully logged out',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
    }

    return (
        <div className="min-h-screen bg-[#f7f9f8]">
            <div className="py-10 bg-white">
                <h1 className="text-3xl w-9/12 mx-auto">Account Settings</h1>
            </div>
            <div className="py-10">
                <div className="flex gap-5 w-9/12 mx-auto">
                    <div className="relative">
                        <img className="w-[100px] h-[100px] rounded-full" src={userImage} alt="" />
                        <div className="bg-[#6c25ff] w-fit rounded-full p-1 absolute right-0 bottom-[10px]">
                            <AiFillCamera className="text-white text-xl"></AiFillCamera>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">{user?.displayName}</h1>
                        <p className="text-xl">{user?.email}</p>
                        <button onClick={handleLogOut} className="bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-800 ease-in-out duration-200 mt-2">Log Out</button>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="w-9/12 mx-auto">Lorem Ipsum Dolor Sit Amet, Consetetur, Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut  Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
                </div>
                <div className="min-h-[500px] border-y-2 border-dashed border-[#d4d5d5] my-10">

                </div>
            </div>
        </div>
    );
};

export default Profile;

// border-[#d4d5d5]