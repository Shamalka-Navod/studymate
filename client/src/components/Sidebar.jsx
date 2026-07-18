import {
  FiHome,
  FiBook,
  FiCpu,
  FiSettings
} from "react-icons/fi";


function Sidebar(){

  return (

    <aside className="
      w-64
      min-h-screen
      bg-gradient-to-b
      from-purple-600
      to-indigo-700
      text-white
      p-6
      hidden
      md:block
    ">

      <h1 className="
        text-2xl
        font-bold
        mb-10
      ">
        📚 StudyMate
      </h1>


      <nav className="space-y-4">


        <div className="menu-item">
          <FiHome/>
          Dashboard
        </div>


        <div className="menu-item">
          <FiBook/>
          Notes
        </div>


        <div className="menu-item">
          <FiCpu/>
          AI Summary
        </div>


        <div className="menu-item">
          <FiSettings/>
          Settings
        </div>


      </nav>


    </aside>

  )

}


export default Sidebar;