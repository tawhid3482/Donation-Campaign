import { useLoaderData } from "react-router-dom";
import { Pie, PieChart, Tooltip } from "recharts";
import PieChartShow from "./PieChartShow";

const Statistics = () => {
    const data = useLoaderData();


    return (
        <div>
            {data.map(donation => <PieChartShow key={donation.id} donation={donation}></PieChartShow>)
            }
        </div>
    );
};

export default Statistics;
