import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { RxCross1 } from 'react-icons/rx';
import { useState } from "react";
import Link from "./Link/Link";


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/', exact: true },
        { id: 3, name: 'Donation', path: '/donation', exact: true },
        { id: 4, name: 'Statistics', path: '/statistics', exact: true },
    ];

    return (
        <nav className=" p-4 flex items-center gap-32 justify-between ">
            <div className="">
                <Logo></Logo>
            </div>
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <RxCross1 /> : <HiOutlineMenuAlt1 />
                }
            </div>
            <ul className={` gap-5 md:flex  absolute  md:static duration-1000 ${open ? 'top-16' : '-top-60'} ${open ? 'right-8' : 'right-8'}`}>
                {
                    routes?.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default Navbar;