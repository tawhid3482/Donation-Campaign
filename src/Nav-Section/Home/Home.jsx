import useHook from "../../Hook/Hook";
import Baner from "./Baner";
import Cards from "./Cards";

const Home = () => {
    const [donations] = useHook()
    return (
        <div>
            <Baner donations={donations}></Baner>
            <Cards ></Cards>

        </div>
    );
};

export default Home;