import {
  FiHome,
  FiBook,
  FiCpu,
  FiSettings,
  FiX
} from "react-icons/fi";

import {
  NavLink
} from "react-router-dom";


function Sidebar({open,setOpen}) {


const menu = [

{
name:"Dashboard",
path:"/",
icon:<FiHome/>,
end:true
},


{
name:"Notes",
path:"/notes",
icon:<FiBook/>
},


{
name:"AI Summary",
path:"/summary",
icon:<FiCpu/>
},


{
name:"Settings",
path:"/settings",
icon:<FiSettings/>
}


];



return (


<aside className={`
fixed
md:static
top-0
left-0
h-screen
w-64
bg-white
dark:bg-gray-800
shadow-lg
p-5
z-50
transform

${open ? "translate-x-0" : "-translate-x-full"}

md:translate-x-0

transition-transform
duration-300
`}>



<div className="
flex
justify-between
items-center
mb-8
">


<h1 className="
text-2xl
font-bold
text-purple-600
">

StudyMate

</h1>



<button

onClick={()=>setOpen && setOpen(false)}

className="
md:hidden
text-red-500
"

>

<FiX size={22}/>

</button>


</div>






<nav className="
space-y-3
">


{

menu.map((item,index)=>(


<NavLink

key={index}

to={item.path}

end={item.end}

onClick={()=>setOpen && setOpen(false)}


className={({isActive})=>

`

flex
items-center
gap-3
px-4
py-3
rounded-xl
transition


${
isActive

?

"bg-purple-600 text-white"

:

"text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-700"

}

`

}


>


{item.icon}


<span>

{item.name}

</span>


</NavLink>


))


}


</nav>




</aside>


);


}


export default Sidebar;