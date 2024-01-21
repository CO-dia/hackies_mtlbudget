import { useNavigate } from "react-router";

const TryNowButton = () => {
    const navigate = useNavigate();
    return (
        <button className="bg-yellow-500 font-bold w-5/12 py-7 text-5xl text-white rounded-full" onClick={() => navigate('/info')}>
            TRY NOW !
        </button>
    )
};

export default TryNowButton;
