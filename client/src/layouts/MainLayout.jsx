import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


function MainLayout({children}) {


  const [open,setOpen] = useState(false);



  return (


    <div className="
      flex
      min-h-screen
      bg-gray-100
      dark:bg-gray-900
    ">



      <Sidebar

        open={open}

        setOpen={setOpen}

      />




      <div className="
        flex-1
      ">



        <Navbar

          setOpen={setOpen}

        />




        <main className="
          p-6
        ">


          {children}


        </main>




      </div>




    </div>


  );


}


export default MainLayout;