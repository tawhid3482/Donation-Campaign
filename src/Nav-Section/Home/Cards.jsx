import DonationCards from "./DonationCards";

const Cards = ({donations}) => {
    return (
        <div className="my-10">
            <div className=" grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">   
                {
                    donations?.map(donation =><DonationCards key={donation.id} donation={donation}></DonationCards>)
                }
            </div>
        </div>
    );
};

export default Cards;