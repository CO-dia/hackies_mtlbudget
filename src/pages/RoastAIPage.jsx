import React, { useState, useEffect } from "react";

const systemMessage = {
    role: "system",
    content: "Explain things like you're talking to a software professional with 2 years of experience."
};

const RoastAIPage = () => {
    const [userInput, setUserInput] = useState("");
    const [suggestion, setSuggestion] = useState("");
    const [typingTimeout, setTypingTimeout] = useState(null);

    async function query(data) {
        try {
            const response = await fetch(
                "https://api-inference.huggingface.co/models/satvikag/chatbot",
                {
                    headers: {
                        Authorization: `Bearer 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`,
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify(data),
                }
            );
            const result = await response.json();
            return result;
        } catch (error) {
            return "";
        }
    }

    const getSuggestion = async () => {
        const huggingFaceresponse = await query({
            inputs: userInput,
        });
        console.log("Hugging Face Response:", huggingFaceresponse?.generated_text);
        const aiSuggestion = huggingFaceresponse?.generated_text;
        const newAiSuggestion = aiSuggestion?.replace(/\n/g, "");

        setSuggestion(newAiSuggestion);
    };

    const handleInputChange = (e) => {
        const inputText = e.target.value;
        setUserInput(inputText);
        setSuggestion("");
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        if (inputText.length > 0) {
            const newTypingTimeout = setTimeout(() => {
                getSuggestion();
            }, 3000);

            setTypingTimeout(newTypingTimeout);
        }
    };

    const handleTabKeyPress = (e) => {
        if (e.key === "Tab") {
            e.preventDefault();
            setUserInput(suggestion);
            setSuggestion("");
        }
    };

    useEffect(() => {
        return () => {
            if (typingTimeout) {
                clearTimeout(typingTimeout);
            }
        };
    }, []);

    return (
        <main className="h-screen w-full">
            <div className="flex flex-col items-center justify-center h-full px-10">
                <h1 className="text-4xl my-10 font-bold tracking-widest bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-transparent bg-clip-text">
                    Finance Tips
                </h1>
                <div className="relative">
                    <textarea
                        className="absolute border border-purple-500 rounded-lg inset-0 bg-transparent z-0 text-black-500 w-[700px] p-4 outline-none "
                        value={userInput}
                        placeholder={suggestion ? suggestion : "Enter text"}
                        onChange={handleInputChange}
                        onKeyDown={handleTabKeyPress}
                    />
                    <p className=" text-black-500 w-[700px] p-4 outline-none z-50">
                        {suggestion}
                    </p>
                </div>
            </div>
        </main>
    );
};



export default RoastAIPage;
