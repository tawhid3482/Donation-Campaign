import { Link } from "react-router-dom";

const DonationCards = ({ donation }) => {
    const { id, img, title, category_name, category_color1,category_color2,category_color3 } = donation || {};

    const divStyle = {
        backgroundColor: category_color1, 
    };
  
    const divStyle3 = {
        backgroundColor: category_color3, 
    };


    return (
        <div className="" >
            <Link to={`/donation/${id}`}>
                <div style={divStyle3} className={`card card-compact h-72 w-72  shadow-xl`}>
                    <figure ><img className="w-full" src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <span className="text-2xl text-center" style={divStyle}>{category_name}</span>

                        <p className="text-3xl " style={{ color: category_color2 }}>{title}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DonationCards;
