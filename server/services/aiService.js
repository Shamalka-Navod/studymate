require("dotenv").config();

const OpenAI = require("openai");


console.log(
  "Groq Key Loaded:",
  process.env.GROQ_API_KEY
);



const client = new OpenAI({

  apiKey: process.env.GROQ_API_KEY,

  baseURL:
    "https://api.groq.com/openai/v1",

});





// =========================
// AI SUMMARY
// =========================

const generateSummary = async(content)=>{


  try{


    const response =
    await client.chat.completions.create({


      model:
      "llama-3.3-70b-versatile",



      messages:[

        {

          role:"user",

          content:`

Summarize this study note.

Rules:
- Use maximum 5 bullet points
- Use simple student friendly language
- Keep it short
- Do not add introduction text

Study Note:

${content}

`

        }

      ],


      temperature:0.3


    });




    return response
    .choices[0]
    .message
    .content;



  }catch(error){


    console.log(
      "Groq Summary Error:",
      error.message
    );


    throw new Error(
      "Failed to generate summary"
    );


  }


};









// =========================
// AI QUIZ GENERATOR
// =========================


const generateQuiz = async(content)=>{


  try{


    const response =
    await client.chat.completions.create({



      model:
      "llama-3.3-70b-versatile",




      messages:[

        {

          role:"user",

          content:`

Generate exactly 5 MCQ questions from this study note.

Return ONLY valid JSON.

Do not use markdown.

JSON format:

[
 {
  "question":"",
  "options":[
    "",
    "",
    "",
    ""
  ],
  "answer":""
 }
]


Study Note:

${content}

`

        }

      ],



      temperature:0.2



    });





    let text =
    response
    .choices[0]
    .message
    .content;




    console.log(
      "AI QUIZ RESPONSE:",
      text
    );




    // remove markdown if AI adds it

    text=text
    .replace(/```json/g,"")
    .replace(/```/g,"")
    .trim();





    const start =
    text.indexOf("[");


    const end =
    text.lastIndexOf("]");




    if(start !== -1 && end !== -1){

      text =
      text.substring(
        start,
        end + 1
      );

    }





    return JSON.parse(text);





  }catch(error){


    console.log(
      "Groq Quiz Error:",
      error.message
    );


    throw new Error(
      "Failed to generate quiz"
    );


  }


};






module.exports={

  generateSummary,

  generateQuiz

};