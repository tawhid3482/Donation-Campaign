import { Outlet } from "react-router-dom";
import Navbar from "../Nav-Section/Navbar/Navbar";

const MainLayOut = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="container mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayOut;