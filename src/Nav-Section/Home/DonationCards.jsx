import { Link } from "react-router-dom";

const DonationCards = ({ donation }) => {
    const { id, img, title, category_name, text_color, category_bg, card_bg, price } = donation || {};

    const divStyle = {
        backgroundColor: category_bg,
    };

    const divStyle3 = {
        backgroundColor: card_bg, 
    };
 
    return (
        <div className="" >
            <Link to={`/donation/${id}`}>
                <div style={divStyle3} className={`card card-compact h-72 w-72  shadow-xl`}>
                    <figure ><img className="w-full" src={img} alt="" /></figure>
                    <div className="my-4 p-3" style={{ color: text_color }}>
                        <span className="text-xl text-left p-1" style={divStyle}>{category_name}</span>

                        <p className="text-2xl " style={{ color: text_color }}>{title}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DonationCards;
