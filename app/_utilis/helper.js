import runGeminiScript from "../_components/geminiHelper"

export async function jobInformation(JobPosition, JobDescription, yearOfExperience) {

    let str = `JobPosition:${JobPosition},Job description:${JobDescription}, yeas of experience:${yearOfExperience} depending on information give me 7 interview question  in json format don't give extra things just give array of object`
    return await runGeminiScript(str)

}
export async function jobFeedBack(question, userAnswer) {
    let str =  `This is question ${question}, this is answer from user ${userAnswer}. Give feedback to user according to their answer, provide a rating out of 5, and also give an ideal answer of 3-4 lines. Give the answer in JSON format like this:

    {
      "feedback": "",
      "rating": "",
      "idealAnswer": ""
    }
    
    Note that if no answer is given from the user, then just provide a rating of 0 and your ideal answer. An important thing to remember is to give feedback as "You didn't answer the question" if the user's answer is empty.`
    return await runGeminiScript(str)


}

export function dateConverter(isoDateString){
    const date = new Date(isoDateString);

    // Extract individual date components
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Months are zero-indexed
    const year = date.getUTCFullYear();
    
    // Format the date as "date-month-year"
    const formattedDate = `${String(day).padStart(2, '0')}-${String(month).padStart(2, '0')}-${year}`;
    
    return formattedDate
}