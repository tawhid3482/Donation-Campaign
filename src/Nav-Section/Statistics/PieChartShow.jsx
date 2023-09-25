import { Pie, PieChart, Tooltip } from "recharts";

const PieChartShow = ({donation}) => {
    // const { price } = donation

   const data =[
    {name:'daikat', price:45},
    {name:'saikat', price:47},
    {name:'taikat', price:5}
   ]
    return (
        <div>
            <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
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