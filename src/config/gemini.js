//abdullah and donot copy my apikey and i will soon update my code and hide the api  by the help of the environmental varibles
import {
    GoogleGenerativeAI,
  } from "@google/generative-ai";

   const apiKey = import.meta.env.VITE_API_KEY;
   if (!apiKey) {
    throw new Error("VITE_API_KEY is not defined. Please set it in your .env file.");
  }
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function runChat(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text();
  }
  
export default  runChat;
