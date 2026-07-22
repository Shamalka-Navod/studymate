
import { useTheme } from "../context/ThemeContext";



function Settings(){


const {
  darkMode,
  setDarkMode
}=useTheme();





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

Settings ⚙️

</h1>





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

Appearance

</h2>




<div className="
mt-5
flex
justify-between
items-center
">


<p className="
text-gray-600
dark:text-gray-300
">

Dark Mode

</p>



<button

onClick={()=>setDarkMode(!darkMode)}

className="
bg-purple-600
text-white
px-5
py-2
rounded-xl
"

>


{
darkMode
?
"Disable"
:
"Enable"
}


</button>



</div>



</div>



</div>


</main>

);


}


export default Settings;