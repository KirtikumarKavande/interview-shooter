import runGeminiScript from "../_components/geminiHelper"

export async function jobInformation(JobPosition, JobDescription, yearOfExperience) {

    let str = `JobPosition:${JobPosition},Job description:${JobDescription}, yeas of experience:${yearOfExperience} depending on information give me 7 interview question  in json format don't give extra things just give array of object`
    return await runGeminiScript(str)

}
export async function jobFeedBack(question, userAnswer) {
    let str = `This is question ${question},this is answer from user ${userAnswer}, give feedback to user according to his answer , provide rating out of 5 also give ideal answer of it 3-4 lines give answer in json format like feedback:"",rating:"",idealAnswer:"" and note that if no answer given from user then just provide rating as 0 and your ideal answer, imp thing  give feedback as you didn't answered the question `
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