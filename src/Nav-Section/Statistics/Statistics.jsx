import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { Pie, PieChart, Tooltip, Cell,  } from "recharts";

const Statistics = () => {
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const donateItem = JSON.parse(localStorage.getItem('donat'));
        if (donateItem) {
            const total = donateItem.reduce((pre, curr) => pre + curr.price, 0)
            const donateTotal = (total / allTotal) * 100
            setTotalPrice(donateTotal.toFixed(2)); 
        }
    },[])

    const data1 = useLoaderData()
    const allTotal = data1.reduce((pre, curr) => pre + curr.price, 0)
    const finalTotal = ((allTotal / allTotal) * 100 - parseFloat(totalPrice)).toFixed(2); 

    const data = [
        { name: 'Total Percentage', value: parseFloat(finalTotal), fill: '#FF444A' }, 
        { name: 'Your Donation', value: parseFloat(totalPrice), fill: '#00C49F' }, 
    ]

    return (
     
            <div className="w-2/3 mx-auto">
                  <Helmet>
                <title>Donation - Statistice</title>
            </Helmet>
            <div className="flex justify-center items-center">
                <PieChart width={700} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>

            <div className="flex gap-10 items-center justify-center font-medium text-2xl">
                <p className="text-green-500">Your Donation: {totalPrice}%</p>
                <p className="text-red-500">Total Donation: {finalTotal}%</p>
            </div>
            </div>
      
    );
};

export default Statistics;
