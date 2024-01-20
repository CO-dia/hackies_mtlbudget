
import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex items-right justify-center h-screen">
            <div className="w-full h-full relative text-[85px] text-gray font-outfit">
                <b className="absolute top-[192px] left-[151px] inline-block w-[871px] h-[148px]">
                    Montreal Budget slAI
                </b>
                <div className="absolute top-[340px] left-[190px] text-[35px] text-antiquewhite inline-block w-[905px] h-[182px]">
                    Your go-to online platform to track your expenses and organize your
                    budget while enjoying the Montreal lifestyle. Monitor your monthly
                    spendings and stay on top of your financial goals with Montreal Budget
                    slAI
                </div>
                <div className="absolute top-[612px] left-[515px] rounded-[100px] bg-goldenrod w-[410px] h-[159px] mix-blend-normal" />
                <div className="absolute top-[654px] left-[565px] text-[60px] font-extrabold text-white">
                    <button> <Link to="/another">TRY NOW !</Link></button>
                </div>
                <img
                    className="absolute top-[612px] left-[115px] w-[327px] h-80 overflow-hidden object-cover"
                    alt=""
                    src="/house-location@2x.png"
                />
                <img
                    className="absolute top-[45px] left-[1049px] w-[325px] h-[330px] object-cover"
                    alt=""
                    src="/magnifiers-card@2x.png"
                />
                <img
                    className="absolute top-[512px] left-[874px] w-[500px] h-[500px] object-cover"
                    alt=""
                    src="/fixed-asset@2x.png"
                />
            </div>
        </div>
    );
};

export default Home;
