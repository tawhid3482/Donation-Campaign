import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart } from "recharts";
import PieChartShow from "./PieChartShow";

const Statistics = () => {
    const data = useLoaderData()


    return (
        <div>
           {
            data.map(donation => <PieChartShow key={donation.id} donation={donation}></PieChartShow>)
           }
        </div>
    );
};

export default Statistics;