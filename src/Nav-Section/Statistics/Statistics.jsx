import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Pie, PieChart, Tooltip } from "recharts";

const Statistics = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        const donateItem = JSON.parse(localStorage.getItem('donat'));
        if (donateItem) {
            const total = donateItem.reduce((pre, curr) => pre + curr.price, 0)
            setTotalPrice(total)

        }})

        const data1 = useLoaderData()
        const total = data1.reduce((pre, curr) => pre + curr.price, 0)
        console.log(total)

        const data = [
            { name: 'Total Price', price: total },
            { name: 'Donate ', price: totalPrice },
        ]

        return (
            <div className="flex justify-center">
                <PieChart width={400} height={400}>
                    <Pie

                        dataKey="price"
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#7964d4"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </div>
        );
    };

    export default Statistics;
