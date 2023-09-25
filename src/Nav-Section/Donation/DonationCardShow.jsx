
const DonationCardShow = ({ donation }) => {
    const { id, img, title, category_name, category_color1,category_color2,category_color3,price } = donation || {};

    const divStyle = {
        backgroundColor: category_color1, 
    };
  
    const divStyle3 = {
        backgroundColor: category_color3, 
    };

    return (
        <div>

            <div style={divStyle3} className="relative w-[300px] lg:w-[500px]  flex max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={img}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 style={divStyle} className="mb-2 block font-sans text-base font-semibold  leading-relaxed tracking-normal antialiased">
                       {category_name}
                    </h6>
                    <h4 style={{ color: category_color2 }} className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p style={{ color: category_color2 }}  className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                       ${price}.00
                    </p>
                    <a className="inline-block" href="#">
                        <button
                        style={divStyle}
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                           View Details
                            
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DonationCardShow;