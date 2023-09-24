import swal from "sweetalert";

const CardDetailsShow = ({ donation }) => {
    const { id, img, title, category_name, category_color, description, price } = donation || {}

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
        <div className="flex  mt-10 justify-center items-center">
            <div className="relative flex w-4/5  flex-col rounded-xl bg-white bg-clip-border text-gray-700 ">
                <div className="relative mx-4 -mt-6  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-blue-gray-500/40">
                    <img
                    className="w-full h-96"
                        src={img}
                        alt="img-blur-shadow"
                    />
                    <div className="p-6 mt-0 bg-gray-400">
                        <button
                        onClick={handleDonate}
                            className=" px-6 select-none rounded-lg bg-pink-500 py-3  text-center align-middle font-sans  font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none text-2xl  disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            Donate $ {price}
                        </button>

                    </div>
                </div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h5>
                    <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        {description}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CardDetailsShow;

