import {
  FiMoon,
  FiSun,
  FiMenu,
  FiBell,
  FiUser
} from "react-icons/fi";


import {
  useTheme
} from "../context/ThemeContext";



function Navbar({setOpen}){


const {
  darkMode,
  setDarkMode

}=useTheme();




return (


<header className="
h-20
bg-white
dark:bg-gray-900
shadow
flex
items-center
justify-between
px-6
md:px-8
transition
">





{/* Left Side */}

<div className="
flex
items-center
gap-4
">



{/* Mobile Menu Button */}

<button

onClick={()=>setOpen(true)}

className="
md:hidden
p-2
rounded-lg
bg-gray-100
dark:bg-gray-700
text-gray-700
dark:text-white
"

>

<FiMenu size={24}/>

</button>





<h2 className="
text-xl
font-semibold
text-gray-700
dark:text-white
">


Student Dashboard


</h2>



</div>









{/* Right Side */}

<div className="
flex
items-center
gap-4
">





{/* Notification */}

<button

className="
p-3
rounded-xl
bg-gray-100
dark:bg-gray-700
text-gray-700
dark:text-white
hover:scale-105
transition
"

>


<FiBell/>


</button>









{/* Dark Mode */}

<button

onClick={()=>setDarkMode(!darkMode)}

className="
p-3
rounded-xl
bg-gray-100
dark:bg-gray-700
transition
hover:scale-105
"


>


{

darkMode

?


<FiSun

className="
text-yellow-400
text-xl
"

/>


:


<FiMoon

className="
text-xl
"

/>


}



</button>









{/* Profile */}

<div className="
hidden
md:flex
items-center
gap-2
bg-gray-100
dark:bg-gray-700
px-3
py-2
rounded-xl
">


<div className="
bg-purple-600
text-white
p-2
rounded-full
">


<FiUser/>

</div>



<span className="
text-gray-700
dark:text-white
font-medium
">


Student


</span>



</div>





</div>





</header>



);


}



export default Navbar;