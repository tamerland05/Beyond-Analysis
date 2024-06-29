import React from "react";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

export default function SaleInDay({data}) {
        console.log(data)
        return (

            <div className="lineChartBody">
                <ResponsiveContainer width="100%" aspect={3}>
                    <LineChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="0" horizontal="true" vertical="" />
                        <XAxis dataKey="time" />
                        <YAxis />

                        <Tooltip />
                        <Line   name="Маркетплейс"  type="monotone" dataKey="sells" stroke="#0069d9" activeDot={{ r: 8 }} strokeWidth={5}  dot={{ stroke: '#022ba6', strokeWidth: 6 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );

}
