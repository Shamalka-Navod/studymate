import Sidebar from "./components/Sidebar";
import Notes from "./pages/Notes";


function App(){

  return (

    <div className="
      flex
      min-h-screen
      bg-gray-100
    ">


      <Sidebar/>


      <Notes/>


    </div>

  )

}


export default App;