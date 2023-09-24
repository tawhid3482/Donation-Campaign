import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetailsShow from "./CardDetailsShow";

const CardDetails = () => {
    const [donation, setDonation] = useState()
    const donations = useLoaderData()
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        const findDonation = donations?.find(donation => donation.id == id)
        setDonation(findDonation)
        console.log(findDonation)
    }, [id,donations])
    return (
        <div className="">
                <CardDetailsShow donation={donation}></CardDetailsShow>
        </div>
    );
};

export default CardDetails;
