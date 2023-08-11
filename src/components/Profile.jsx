import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import userImage from '../assets/images/popx-project-image.jpg'


const Profile = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className="min-h-screen bg-[#f7f9f8]">
            <div className="py-10 bg-white">
                <h1 className="text-3xl w-9/12 mx-auto">Account Settings</h1>
            </div>
            <div className="py-10">
                <div className="flex gap-5 w-9/12 mx-auto">
                    <div>
                        <img className="w-[100px] h-[100px] rounded-full" src={userImage} alt="" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">{user?.displayName}</h1>
                        <p className="text-xl">{user?.email}</p>
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