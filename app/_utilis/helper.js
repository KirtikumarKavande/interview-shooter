import runGeminiScript from "../_components/geminiHelper"

export async function jobInformation(JobPosition, JobDescription, yearOfExperience) {

    let str = `JobPosition:${JobPosition},Job description:${JobDescription}, yeas of experience:${yearOfExperience} depending on information give me 7 interview question  in json format don't give extra things just give array of object`
   return await runGeminiScript(str)

}