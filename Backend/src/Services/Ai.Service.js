
const {GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({

    apiKey:  process.env.GoogleGeminiApi
});

const invokeGeminiAi = async()=>{

    const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: [
        { role: 'user', parts: [{ text: 'Hello Gemini ! Explain what is Interview' }] }
    ],
    });

    console.log(response.text);
    


}

module.exports = invokeGeminiAi