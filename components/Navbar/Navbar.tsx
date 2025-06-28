import ProfileComponent from "../ProfileComponent/ProfileComponent";


export default function Navbar(){

    return(
        <nav className="flex justify-between bg-white p-6">
            <div className=" ">
                <img className="h-14 w-auto pt-2 pl-8" src="./logo.png" alt="LOGO"/>
            </div>
            <div className="mr-6">
                <ProfileComponent/>
            </div>
        </nav>
    );
}