import { NavLink } from "react-router-dom";

const Link = ({route}) => {
    return (
        <div>

            <li className="px-6">
                <NavLink
                    to={route.path}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }
                >
                    {route.name}
                </NavLink>
            </li>


        </div>
    );
};

export default Link;