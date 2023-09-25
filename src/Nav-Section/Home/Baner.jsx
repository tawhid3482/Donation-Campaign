import { useLoaderData } from "react-router-dom";
import useHook from "../../Hook/Hook";
import { useEffect } from "react";

const Baner = () => {
    const handleSeacrh = () => {
        const seacrhField = document.getElementById('search')
        const textSeacrh = seacrhField.value

    }
    return (
        <div>
            <div className="hero h-96" >
                <div className=" bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-black text-5xl font-bold">I Grow By Helping People In Need</h1>

                        <div className="flex items-center justify-center">
                            <input id="search" type="text" placeholder="Type here" className=" border-2 border-black text-black p-3 rounded-md input-bordered w-full max-w-xs" />
                            <button onClick={handleSeacrh} className="p-3 w-28 rounded-md bg-[#FF444A] text-white">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Baner;