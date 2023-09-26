import DonationCards from "./DonationCards";

const Cards = ({ donations, query }) => {
    console.log(query); 
    
    if (!donations) {
        return null;
    }

    const filteredDonations = query
        ? donations?.filter(donation => donation.some_property.includes(query))
        : donations;

    return (
        <div className="my-10">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                {filteredDonations.map(donation => (
                    <DonationCards key={donation.id} donation={donation} />
                ))}
            </div>
        </div>
    );
};

export default Cards;


