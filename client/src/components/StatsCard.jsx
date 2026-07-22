function StatsCard({

title,

value,

icon

}){


return (

<div className="
bg-white
dark:bg-gray-800
rounded-2xl
p-6
shadow-md
hover:shadow-xl
transition
">


<div className="
flex
justify-between
items-center
">


<div>


<p className="
text-gray-500
dark:text-gray-400
">

{title}

</p>



<h2 className="
text-3xl
font-bold
mt-2
text-gray-800
dark:text-white
">

{value}

</h2>


</div>



<div className="
text-3xl
bg-purple-100
dark:bg-purple-900
p-3
rounded-xl
">

{icon}

</div>



</div>


</div>

);


}


export default StatsCard;