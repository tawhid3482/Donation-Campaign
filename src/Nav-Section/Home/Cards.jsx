
import DonationCards from "./DonationCards";

const Cards = ({ donations, filterCards }) => {  
    return (
        <div className="my-10 ">
            <div className="flex flex-wrap justify-center  items-center md:grid gap-5 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto">
                {filterCards?.length > 0 ? (
                    filterCards.map(donation => (
                        <DonationCards key={donation.id} donation={donation} />
                    ))
                ) : (
                    <div>

                    </div>
                )}
            </div>
            {donations?.length > 0 && (
                <div className={`mt-10 ${filterCards? 'hidden':''}`} >
                    <div className="flex flex-wrap justify-center items-center md:grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {donations?.map(donation => (
                            <DonationCards key={donation.id} donation={donation} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cards;




