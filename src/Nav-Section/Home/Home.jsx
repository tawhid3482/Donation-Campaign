import { Helmet } from "react-helmet-async";
import useHook from "../../Hook/Hook";
import Baner from "./Baner";
import Cards from "./Cards";

const Home = () => {
    const [donations] = useHook()
    return (
        <div>
            <Helmet>
                <title>Donation - Home</title>
            </Helmet>
            <Baner donations={donations}></Baner>
            <Cards ></Cards>

        </div>
    );
};

export default Home;