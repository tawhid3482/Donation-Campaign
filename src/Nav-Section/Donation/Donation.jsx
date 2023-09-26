import { useEffect, useState } from "react";
import DonationCardShow from "./DonationCardShow";

const Donation = () => {
    const [donate, setDonate] = useState([]);
    const [noData, setNoData] = useState(false);
    const [seeMore, setSeeMore] = useState(false);

    useEffect(() => {
        const donateItem = JSON.parse(localStorage.getItem('donat'));
        if (donateItem) {
           
            setDonate(donateItem);
        } else {
            setNoData("No Data Found");
        }
    }, []);

    const handleRemove = () => {
        localStorage.clear();
        setDonate([]);
        setNoData('No data found');
    };

    return (
        <div className="w-4/5 mx-auto">
            {noData ? (
                <p className="text-4xl font-semibold flex justify-center items-center h-[80vh]">{noData}</p>
            ) : (
                <div>
                    <div className="text-right ">
                        {donate.length > 0 && (
                            <button onClick={handleRemove} className="btn mt-16 mt-16 md:mt-5 my-8 bg-green-500 text-white">Clear data</button>
                        )}
                    </div>
                    <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
                        {seeMore
                            ? donate.map((donation) => (
                                <DonationCardShow key={donation.id} donation={donation}></DonationCardShow>
                            ))
                            : donate.slice(0, 4).map((donation) => (
                                <DonationCardShow key={donation.id} donation={donation}></DonationCardShow>
                            ))}
                    </div>
                    <div className="text-center my-5">
                        {donate.length > 4 && !seeMore && (
                            <button onClick={() => setSeeMore(true)} className="text-center btn text-white bg-green-500">See More</button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Donation;




