
const DonationCardShow = ({ donation }) => {
    const { id, img, title, category_name, text_color, category_bg, card_bg, price } = donation || {};

    const divStyle = {
        backgroundColor: category_bg,
    };

    const divStyle3 = {
        backgroundColor: card_bg, 
    };
    const divStyle2 = {
        backgroundColor: text_color,
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
                <div className="p-6" style={{ color: text_color }}>
                    <span className="text-xl text-left p-1" style={divStyle}>{category_name} </span>

                    <h4  className="my-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p style={{ color: text_color }} className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        ${price}.00
                    </p>
                    <a className="inline-block" href="#">
                        <button
                            style={divStyle2}
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