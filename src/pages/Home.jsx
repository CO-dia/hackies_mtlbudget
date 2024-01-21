import TryNowButton from "../components/Home/TryNowButton";

const Home = () => {
    return (
        <>
            <img src="../../public/magnifiers-card@2x.png" className="absolute right-72 top-0 w-2/12"/>
            <div className="flex flex-col justify-center font-outfit mt-40 ml-36 w-7/12">
                <b className="text-6xl mb-10">
                    Montreal Budget slAI
                </b>
                <div className="text-white w-9/12 text-xl ml-16">
                    Your go-to online platform to track your expenses and organize your
                    budget while enjoying the Montreal lifestyle. Monitor your monthly
                    spendings and stay on top of your financial goals with Montreal Budget
                    slAI
                </div>
                <div className="flex justify-center mt-10">
                    <TryNowButton />
                </div>
                <img src="../../public/house-location@2x.png" className="absolute w-2/12 mt-96"/>

                <img src="../../public/fixed-asset@2x.png" className="absolute w-3/12 mt-80 right-56"/>
            </div>
        </>
    );
};

export default Home;
