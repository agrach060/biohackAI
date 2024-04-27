import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ChatBox.css';
;

function ChatBox() {
    const [inputText, setInputText] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const options = {
            method: 'POST',
            url: 'https://symptom-checker4.p.rapidapi.com/analyze',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '3f7a2345ebmsheec1c1cb95f2d08p136a56jsnd73b610b8305',
                'X-RapidAPI-Host': 'symptom-checker4.p.rapidapi.com'
            },
            data: {
                symptoms: inputText
            }
        };

        try {
            const response = await axios.request(options);
            setResponse(response.data);
            setError(null);
        } catch (error) {
            console.error('Error analyzing symptoms:', error);
            setError(error.message);
        }
    };

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    return (
        <div className="chat-box">
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Describe your symptoms..."
                />
                <div className="button-container">
                    <button type="submit">Analyze</button>
                </div>
            </form>
            {error && <div className="error">{error}</div>}
            {response && (
                <div className="response">
                    <h3>Analysis Result:</h3>
                    {response.potentialCauses && (
                        <p>Potential Causes: {response.potentialCauses.join(', ')}</p>
                    )}
                    {response.followupQuestions && (
                        <p>Follow-up Questions: {response.followupQuestions.join(', ')}</p>
                    )}
                    {Array.isArray(response.symptoms) && (
                        <p>Symptoms: {response.symptoms.join(', ')}</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default ChatBox;
