


function Summary(){


  return (

    <main className="
      flex-1
      p-6
      bg-gray-100
      dark:bg-gray-900
      min-h-screen
    ">




      <div className="mt-8">


        <h1 className="
          text-3xl
          font-bold
          text-gray-800
          dark:text-white
        ">

          AI Summary 🤖

        </h1>



        <p className="
          mt-3
          text-gray-600
          dark:text-gray-300
        ">

          Generate and view AI powered summaries from your study notes.

        </p>





        <div className="
          mt-8
          bg-white
          dark:bg-gray-800
          rounded-2xl
          p-6
          shadow
        ">


          <h2 className="
            text-xl
            font-bold
            dark:text-white
          ">

            How it works?

          </h2>




          <ul className="
            mt-4
            space-y-3
            text-gray-600
            dark:text-gray-300
          ">


            <li>
              ✅ Add your study note
            </li>


            <li>
              ✅ Click AI Summary button
            </li>


            <li>
              ✅ Groq AI generates a short summary
            </li>


          </ul>


        </div>



      </div>



    </main>


  );


}


export default Summary;