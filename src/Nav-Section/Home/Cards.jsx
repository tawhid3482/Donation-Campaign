
import DonationCards from "./DonationCards";

const Cards = ({ donations, searchQuery }) => {
    console.log(searchQuery)
    
    if (!donations) {
        return null;
    }

    const filteredDonations = searchQuery
        ? donations?.map(donation => donation.some_property.includes(searchQuery)) 
        : donations;

    return (
        <div className="my-10 ">
            <div className=" flex flex-wrap justify-center items-center md:grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {filteredDonations.map(donation => (
                    <DonationCards key={donation.id} donation={donation} />
                ))}
            </div>
        </div>
    );
};

export default Cards;