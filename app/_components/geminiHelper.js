const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  // responseMimeType: "text/plain",
};

async function runGeminiScript(JobPosition, JobDescription, yearOfExperience) {
  const chatSession = model.startChat({
    generationConfig,
  });

  const result = await chatSession.sendMessage(
    `JobPosition:${JobPosition},Job description:${JobDescription}, yeas of experience:${yearOfExperience} depending on information give me 7 interview question and answer in json format don't give extra things just give array of object`
  );
  return result.response.text();
}

export default runGeminiScript;
