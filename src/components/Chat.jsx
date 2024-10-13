import React, { useState } from 'react';
import { LuSendHorizonal } from "react-icons/lu";

const Chat = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState('');

    async function findAnswer(question) {
        if (!question.trim()) {
            setError('Enter a qution...');
            return;
        }
        setError('');
        try {
            const response = await fetch("http://localhost:3000/api/ask", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question })
            });

            if (!response.ok) {
                throw new Error('problem with server');
            }
            const { answer } = await response.json();
            setAnswer(answer);
        } catch (error) {
            setError('the error is:' + error);
            console.error(" error-AI: " + error);
        }
    }

    return (
        <div className="max-w-md p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow-lg">
    <h2 className="mb-4 text-2xl font-semibold text-center text-gray-800">Toke with AI</h2>
    <input
        onChange={(event) => { setQuestion(event.target.value) }}
        type="text"
        placeholder='Enter your question'
        className="w-full p-3 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
        onClick={() => { findAnswer(question) }}
        className="w-full p-3 text-white transition bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        <LuSendHorizonal />
    </button>
    {error && <p className="mt-3 font-medium text-red-600">{error}</p>}
    <p className="mt-3 text-gray-800">{answer}</p>
</div>

    );
}

export default Chat;
