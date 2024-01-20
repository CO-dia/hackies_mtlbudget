import React from "react";

const PieChart = () => {
    // Example data for the pie chart
    const data = [
        { label: "Category A", value: 30, color: "bg-blue-500" },
        { label: "Category B", value: 20, color: "bg-green-500" },
        { label: "Category C", value: 50, color: "bg-yellow-500" },
    ];

    // Calculate total value for percentage calculation
    const totalValue = data.reduce((acc, item) => acc + item.value, 0);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="relative w-64 h-64">
                {data.map((item, index) => {
                    const percentage = (item.value / totalValue) * 100;
                    const rotation = index === 0 ? 0 : data.slice(0, index).reduce((acc, val) => acc + (val.value / totalValue) * 360, 0);

                    return (
                        <div
                            key={index}
                            className={`absolute w-full h-full clip-auto ${item.color} rotate-${rotation} origin-center transform transition-transform ease-in-out duration-300`}
                            style={{ clipPath: `polygon(50% 50%, 100% 0, ${percentage > 50 ? "100%" : "0"} 0)` }}
                        ></div>
                    );
                })}
            </div>
            <div className="absolute flex items-center justify-center w-40 h-40 text-white bg-white rounded-full">
                {/* You can display additional information here */}
                <span className="text-2xl font-bold">{totalValue}</span>
            </div>
        </div>
    );
};

export default PieChart;
