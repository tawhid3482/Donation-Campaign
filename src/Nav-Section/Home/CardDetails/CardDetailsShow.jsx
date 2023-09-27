import { Helmet } from "react-helmet-async";
import swal from "sweetalert";

const CardDetailsShow = ({ donation }) => {
    const { id, img,  category_name, text_color,  price,description } = donation || {};

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
            <Helmet>
                <title>Donation - Dontaion Details</title>
            </Helmet>
            <div  className=" py-10 relative flex w-4/5  flex-col rounded-xl bg-white bg-clip-border text-gray-700 ">
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
                            className=" p-3 select-none rounded-lg   text-center align-middle font-sans  font-bold  text-white shadow-md   hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none text-lg  disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            Donate $ {price}
                        </button>

                    </div>
                </div>
                <div className="p-6">
                    <h5  className="mb-2 font-bold block font-sans text-xl leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {category_name}
                    </h5>
                    <p  className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        {description}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CardDetailsShow;

