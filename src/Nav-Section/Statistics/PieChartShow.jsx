import { useParams } from "react-router-dom";
import { Pie, PieChart, Tooltip } from "recharts";
import { saikat } from "../Donation/Donation";
const PieChartShow = ({ donation }) => {
console.log(saikat)

  const { price } = donation
  const { id } = useParams()
  const data = [
    { name: 'Total Price', price: 45 },
    { name: 'Donate ', price: 5 },

  ]
  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="price"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>

    </div>
  );
};

export default PieChartShow;