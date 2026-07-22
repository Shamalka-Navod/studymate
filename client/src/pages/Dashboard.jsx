import { useEffect, useState } from "react";

import StatsCard from "../components/StatsCard";

import {
  FiBookOpen,
  FiFileText,
  FiCpu,
  FiLayers
} from "react-icons/fi";

import {
  getDashboardStats,
  getRecentNotes
} from "../services/api";



function Dashboard() {


  const [dashboardStats, setDashboardStats] = useState({

    totalNotes: 0,
    totalSubjects: 0,
    totalSummaries: 0,
    totalQuizzes: 0

  });



  const [recentNotes, setRecentNotes] = useState([]);



  const [loading, setLoading] = useState(true);





  // Fetch Dashboard Data

  useEffect(()=>{


    const fetchDashboard = async()=>{


      try{


        const statsRes =
        await getDashboardStats();


        setDashboardStats(
          statsRes.data
        );



        const notesRes =
        await getRecentNotes();


        setRecentNotes(
          notesRes.data
        );



      }catch(error){


        console.log(
          "Dashboard Error:",
          error
        );


      }finally{


        setLoading(false);


      }


    };



    fetchDashboard();



  },[]);









  const stats = [


    {

      title:"Total Notes",

      value:
      loading
      ?
      "..."
      :
      dashboardStats.totalNotes,

      icon:<FiFileText/>

    },



    {

      title:"Subjects",

      value:
      loading
      ?
      "..."
      :
      dashboardStats.totalSubjects,

      icon:<FiLayers/>

    },



    {

      title:"AI Summaries",

      value:
      loading
      ?
      "..."
      :
      dashboardStats.totalSummaries,

      icon:<FiCpu/>

    },



    {

      title:"Quizzes",

      value:
      loading
      ?
      "..."
      :
      dashboardStats.totalQuizzes,

      icon:<FiBookOpen/>

    }


  ];







  return (


    <main className="
      flex-1
      p-6
      bg-gray-100
      dark:bg-gray-900
      min-h-screen
    ">



      {/* Header */}

      <div className="mt-8">


        <h1 className="
          text-3xl
          font-bold
          text-gray-800
          dark:text-white
        ">


          Dashboard 📊


        </h1>



        <p className="
          text-gray-500
          dark:text-gray-300
          mt-2
        ">


          Welcome back! Manage your study materials easily.


        </p>


      </div>









      {/* Stats */}

      <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-6
        mt-8
      ">


        {

          stats.map((item,index)=>(


            <StatsCard

              key={index}

              title={item.title}

              value={item.value}

              icon={item.icon}

            />


          ))

        }


      </div>









      {/* Recent Notes */}

      <div className="
        mt-10
        bg-white
        dark:bg-gray-800
        rounded-2xl
        p-6
        shadow
      ">



        <h2 className="
          text-xl
          font-bold
          text-gray-800
          dark:text-white
        ">


          📚 Recent Notes


        </h2>





        <div className="
          mt-5
          space-y-4
        ">


        {


          recentNotes.length === 0

          ?

          (

          <p className="
            text-gray-500
          ">

            No notes available

          </p>

          )


          :


          (

          recentNotes.map(note=>(


            <div

            key={note._id}

            className="
              bg-gray-100
              dark:bg-gray-700
              p-4
              rounded-xl
            "

            >



              <h3 className="
                font-bold
                text-gray-800
                dark:text-white
              ">


                {note.title}


              </h3>



              <p className="
                text-sm
                text-gray-500
                dark:text-gray-300
              ">


                {note.subject}


              </p>





              <div className="
                mt-3
                text-sm
                dark:text-gray-200
              ">



                {

                note.summary

                ?

                <p>
                🤖 AI Summary Ready
                </p>

                :

                <p>
                ⏳ No Summary
                </p>

                }





                {

                note.quiz && note.quiz.length > 0

                ?

                <p>
                📝 Quiz Ready
                </p>

                :

                <p>
                ❌ No Quiz
                </p>

                }



              </div>




            </div>


          ))

          )


        }


        </div>



      </div>









      {/* Features */}

      <div className="
        mt-10
        bg-white
        dark:bg-gray-800
        rounded-2xl
        p-6
        shadow
      ">



        <h2 className="
          text-xl
          font-bold
          text-gray-800
          dark:text-white
        ">


          🚀 StudyMate AI Features


        </h2>





        <ul className="
          mt-4
          space-y-3
          text-gray-600
          dark:text-gray-300
        ">



          <li>
            ✅ Create and manage notes
          </li>


          <li>
            ✅ Generate AI summaries
          </li>


          <li>
            ✅ Generate AI quizzes
          </li>


          <li>
            ✅ Track your learning progress
          </li>



        </ul>



      </div>





    </main>


  );


}



export default Dashboard;