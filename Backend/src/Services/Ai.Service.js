const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
const { zodToJsonSchema } = require("zod-to-json-schema");

const ai = new GoogleGenAI({
  apiKey: process.env.GoogleGeminiApi,
});

const interviewReportSchema = z.object({
  matchScore: z
    .number()
    .min(0)
    .max(100)
    .describe(
      "A score between 0 and 100 indicating how well the candidate's profile matches the job requirements"
    ),

  technicalQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe("The technical question can be asked in the interview"),
        intention: z
          .string()
          .describe(
            "The intention of interviewer behind asking this question"
          ),
        answer: z
          .string()
          .describe(
            "How to answer this question, what points to cover, what approach to take etc."
          ),
      })
    )
    .describe(
      "The technical questions that can be asked in the interview along with their intention"
    ),

  behavioralQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe("The behavioral question can be asked in the interview"),
        intention: z
          .string()
          .describe(
            "The intention of interviewer behind asking this question"
          ),
        answer: z
          .string()
          .describe(
            "How to answer this question, what points to cover, what approach to take etc."
          ),
      })
    )
    .describe(
      "The behavioral questions that can be asked in the interview along with their intention"
    ),

  skillGaps: z
    .array(
      z.object({
        skill: z
          .string()
          .describe("The skill which the candidate is lacking"),
        severity: z
          .enum(["low", "medium", "high"])
          .describe("The severity of this skill gap"),
      })
    )
    .describe(
      "List of all skill gaps in the candidate's profile along with their severity"
    ),

  preparationPlan: z
    .array(
      z.object({
        day: z
          .number()
          .describe(
            "The day number in the preparation plan, starting from 1"
          ),
        focus: z
          .string()
          .describe("The main focus of this day in the preparation plan"),
        tasks: z
          .array(z.string())
          .describe("List of tasks to be done on this day"),
      })
    )
    .describe(
      "A day-wise preparation plan for the candidate to follow in order to clear the skill gaps"
    ),
});

const generateInterviewReport = async ({
  resume,
  selfDescription,
  jobDescription,
}) => {
  const prompt = `You are an expert technical interviewer.

Analyze the resume, self description and job description.

Return ONLY a JSON object.

The JSON MUST exactly match the provided schema.

Do not add any extra fields.

Do not rename any fields.

Do not skip any required fields.

Return ONLY valid JSON.


Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
   config: {
  responseMimeType: "application/json",
  responseSchema: zodToJsonSchema(interviewReportSchema)
    }
  });

//   console.log(
//   JSON.stringify(zodToJsonSchema(interviewReportSchema), null, 2)
// );
const data = JSON.parse(response.text);

console.log(JSON.stringify(data, null, 2));

return data;
};

module.exports = generateInterviewReport;