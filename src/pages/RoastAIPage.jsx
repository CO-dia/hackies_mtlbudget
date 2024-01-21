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
        <main className="h-[80vh] flex items-center justify-center">
            <div className="w-full bg-white p-8  shadow-md">
                <h1 className="text-5xl font-bold mb-6 text-center text-transparent bg-gradient-to-r from-green-700 via-white-500 from-green-700 bg-clip-text">
                    Buddy AI
                </h1>
                <div className="relative">
                    <textarea
                        className="text-3xl w-full h-screen border border-green-500 rounded-lg p-4 outline-none text-lg"
                        value={userInput}
                        placeholder={suggestion ? suggestion : "Enter text"}
                        onChange={handleInputChange}
                        onKeyDown={handleTabKeyPress}
                        autoFocus  // Autofocus to open the textarea by default
                    />
                    <p className="text-black-500 text-3xl mt-4 text-lg">{suggestion}</p>
                </div>
            </div>
        </main>
    );
};



export default RoastAIPage;
