import swal from "sweetalert";

const CardDetailsShow = ({ donation }) => {
    const { id, img, title, category_name, text_color, category_bg, card_bg, price,description } = donation || {};


    const divStyle3 = {
        backgroundColor: card_bg,
    };
    const divStyle2 = {
        backgroundColor: text_color,
    };

    console.log(donation)

    const handleDonate = () => {
        const added = []
        const DonateItem = JSON.parse(localStorage.getItem('donat'))
        if (!DonateItem) {
            added.push(donation)
            localStorage.setItem('donat', JSON.stringify(added))
            swal("Good job!", "You selected", "success");

        }
        else {
            const isExits = DonateItem.find(donation => donation.id === id)
            if (!isExits) {
                added.push(...DonateItem, donation)
                localStorage.setItem('donat', JSON.stringify(added))
                swal("Good job!", "You selected", "success");
            }
            else {
                swal("Opps!", "You already selected!", "error")
            }
        }
    }
    return (
        <div className="flex mt-20  lg:mt-5 justify-center items-center">
            <div style={divStyle3} className=" py-10 relative flex w-4/5  flex-col rounded-xl bg-white bg-clip-border text-gray-700 ">
                <div className="relative mx-4 -mt-6  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-blue-gray-500/40">
                    <img
                        className="w-full relative  h-96"
                        src={img}
                        alt="img-blur-shadow"
                    />
                    <div className="p-3 w-full h-24 opacity-60 mt-5 absolute  bg-slate-600 
                     left-0 bottom-0  ">
                        <button
                            style={divStyle2}
                            onClick={handleDonate}
                            className="text-white p-3 select-none rounded-lg   text-center align-middle font-sans  font-bold  text-white shadow-md   hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none text-lg  disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            Donate $ {price}
                        </button>

                    </div>
                </div>
                <div className="p-6">
                    <h5 style={{ color: text_color }} className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {category_name}
                    </h5>
                    <p style={{ color: text_color }} className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        {description}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CardDetailsShow;

