import { Link } from "react-router-dom";

const DonationCards = ({ donation }) => {
    const { id, img, title, category_name, category_color } = donation;
  
    // Define a function to lighten the color
    const lightenColor = (color, alpha) => {
        const hex = color.replace('#', '');
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    // Lighten the category_color (e.g., 0.8 for 80% lightness)
    const lightenedColor = lightenColor(category_color, 0.8);

    const cardStyle = {
        backgroundColor: lightenedColor,
    };
    const cardColor = {
        backgroundColor: category_color
    }

    return (
        <div className="">
            <Link to={`/donation/${id}`}>

                <div className={`card card-compact h-60 w-72 shadow-xl`}  >
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{category_name}</h2>
                        <p>{title}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DonationCards;
