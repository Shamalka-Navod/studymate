import { useState } from "react";
import { FiX } from "react-icons/fi";


function QuizModal({
  quiz,
  onClose
}) {


  const [answers,setAnswers] = useState({});

  const [submitted,setSubmitted] = useState(false);




  const selectAnswer = (index,value)=>{


    setAnswers({

      ...answers,

      [index]:value

    });


  };





  const calculateScore = ()=>{


    let score = 0;


    quiz.forEach((q,index)=>{


      if(
        answers[index] === q.answer
      ){

        score++;

      }


    });


    return score;


  };







  return (

    <div className="
      fixed
      inset-0
      bg-black/50
      flex
      items-center
      justify-center
      p-5
      z-50
    ">


      <div className="
        bg-white
        dark:bg-gray-800
        rounded-2xl
        p-6
        max-w-3xl
        w-full
        max-h-[85vh]
        overflow-y-auto
      ">




        <div className="
          flex
          justify-between
          mb-5
        ">


          <h2 className="
            text-2xl
            font-bold
            dark:text-white
          ">

            📝 AI Quiz

          </h2>



          <button

            onClick={onClose}

          >

            <FiX size={25}/>

          </button>


        </div>







        {
          quiz.map((q,index)=>(


            <div

              key={index}

              className="
                mb-6
                bg-gray-100
                dark:bg-gray-700
                p-4
                rounded-xl
              "

            >



              <h3 className="
                font-semibold
                dark:text-white
              ">

                {index+1}. {q.question}

              </h3>






              {

                q.options.map((option,i)=>(


                  <label

                    key={i}

                    className="
                      block
                      mt-3
                      p-3
                      bg-white
                      dark:bg-gray-600
                      rounded-lg
                      cursor-pointer
                    "

                  >


                    <input

                      type="radio"

                      name={`q${index}`}

                      value={option}

                      onChange={()=>selectAnswer(index,option)}

                      className="mr-2"

                    />


                    {option}


                  </label>


                ))

              }







              {
                submitted && (

                  <p className={`
                    mt-3
                    font-bold
                    ${
                      answers[index] === q.answer
                      ?
                      "text-green-600"
                      :
                      "text-red-600"
                    }
                  `}>

                    {
                      answers[index] === q.answer
                      ?
                      "✅ Correct"
                      :
                      `❌ Correct Answer: ${q.answer}`
                    }

                  </p>

                )
              }




            </div>


          ))
        }





        <button

          onClick={()=>setSubmitted(true)}

          className="
            bg-purple-600
            text-white
            px-5
            py-3
            rounded-xl
          "

        >

          Submit Quiz

        </button>




        {
          submitted && (

            <h3 className="
              mt-5
              text-xl
              font-bold
            ">

              Score: {calculateScore()} / {quiz.length}

            </h3>

          )
        }



      </div>


    </div>


  );


}


export default QuizModal;