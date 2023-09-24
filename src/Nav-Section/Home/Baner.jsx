
const Baner = () => {
    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>

                        <div className="">
                        <input type="text" placeholder="Type here" className="p-3 rounded-md input-bordered w-full max-w-xs" />
                        <button className="p-3 w-28 rounded-md bg-[#FF444A] text-white">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Baner;