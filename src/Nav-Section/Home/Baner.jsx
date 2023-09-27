import { useState } from "react";
import useHook from "../../Hook/Hook";
import Cards from "./Cards";

const Banner = () => {
    const [donations] = useHook();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        console.log(searchQuery)
    };

    return (
        <div className="mt-0">
            <div className="hero h-96 mt-16 md:mt-1" style={{ backgroundImage: 'url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR1iHjVSDlr0IdVaROO5H5jLL55Nlqc7etzJl89zd14a68j7Mt8X96F19Vw)' }}>
                <div className="hero-overlay bg-white opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-black text-5xl font-bold">I Grow By Helping People In Need</h1>
                        <div className="flex items-center justify-center">
                            <input
                                type="text"
                                placeholder="Search here...."
                                className="border-2 border-black text-black p-3 rounded-md input-bordered w-full max-w-xs"
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button onClick={handleSearch} className="p-3 w-28 rounded-md bg-[#FF444A] text-white">Search</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                {donations
                    ?.filter(category => category.category_name.toLowerCase().includes(searchQuery))
                    .map(category => (
                        <Cards key={category.id} searchQuery={searchQuery} />
                    ))
                }
            </div>
        </div>
    );
};

export default Banner;




