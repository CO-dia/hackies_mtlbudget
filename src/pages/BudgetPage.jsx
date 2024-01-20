import React from "react";
import PieChart from "../components/Home/PieChart";
import { Link } from 'react-router-dom';

const BudgetPage = () => {
    return (

        <div className="w-full relative flex flex-col items-center justify-start pt-0.5 pb-0 pr-[37px] pl-[65px] box-border gap-[31px] bg-cover bg-no-repeat bg-[top] tracking-[normal] mq750:gap-[15px] mq750:pl-8 mq750:box-border">
            <PieChart />
            <img
                className="w-[1440px] relative max-h-full object-cover hidden max-w-full"
                alt=""
                src="/rectangle@2x.png"
            />
            <section className="self-stretch flex flex-row items-start justify-end max-w-full shrink-0 text-left text-5xl text-gray font-outfit">
                <div className="w-[1281px] flex flex-row items-center justify-start gap-[70px] max-w-full mq750:gap-[35px] mq450:gap-[17px] mq1125:flex-wrap">
                    <h1 className="m-0 h-[148px] flex-1 relative text-inherit font-bold font-inherit inline-block min-w-[563px] max-w-full z-[1] mq750:min-w-full mq1025:text-3xl mq450:text-6xl">
                        Your Most Optimal Budget
                    </h1>
                    <img
                        className="w-[340px] relative max-h-full object-cover max-w-full z-[1] mq1125:flex-1"
                        loading="eager"
                        alt=""
                        src="/financial-graph-up-trade-stock@2x.png"
                    />
                </div>
            </section>
            <section className="self-stretch flex flex-row items-start justify-start py-0 pr-[21px] pl-0 box-border max-w-full shrink-0 text-left text-2xl text-antiquewhite font-outfit">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full">
                    <div className="h-[655px] w-[326px] flex flex-col items-start justify-start pt-[263px] px-0 pb-0 box-border max-w-full mq750:pt-[171px] mq750:box-border">
                        <img
                            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain z-[1]"
                            loading="eager"
                            alt=""
                            src="/credit-limit@2x.png"
                        />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[99px] min-w-[634px] max-w-full mq750:gap-[25px] mq1025:gap-[49px] mq1025:min-w-full">
                        <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                            <div className="h-[219px] w-[908px] relative font-light inline-block shrink-0 max-w-full z-[1] mq1025:text-xl mq450:text-lg">
                                Based on the current monthly inflation rate of 0.3%, you should attain your financial goal in 12 months
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BudgetPage;
