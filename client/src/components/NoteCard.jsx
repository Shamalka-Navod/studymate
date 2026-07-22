import {
  FiTrash2,
  FiEdit,
  FiCpu,
  FiBookOpen,
  FiChevronDown,
  FiChevronUp
} from "react-icons/fi";

import { useState } from "react";


function NoteCard({
  note,
  onDelete,
  onEdit,
  onSummary,
  onQuiz
}) {


const [showSummary,setShowSummary] = useState(false);



return (

<div className="
bg-white
dark:bg-gray-800
rounded-3xl
p-6
shadow-md
hover:shadow-2xl
transition
duration-300
border
border-gray-100
dark:border-gray-700
">





{/* Title */}

<div className="
flex
justify-between
items-start
">


<div>


<h3 className="
text-xl
font-bold
text-gray-800
dark:text-white
">

{note.title}

</h3>



<span className="
inline-block
mt-3
px-3
py-1
rounded-full
text-sm
bg-purple-100
text-purple-700
dark:bg-purple-900
dark:text-purple-200
">

{note.subject}

</span>


</div>



<div className="
text-purple-600
dark:text-purple-300
text-2xl
">

📚

</div>



</div>









{/* Content */}

<p className="
mt-5
text-gray-600
dark:text-gray-300
line-clamp-3
">


{note.content}


</p>









{/* Summary */}

{

note.summary && (


<div className="
mt-5
bg-green-50
dark:bg-green-900/30
rounded-xl
p-4
">


<button

onClick={()=>setShowSummary(!showSummary)}

className="
flex
items-center
justify-between
w-full
font-semibold
text-green-700
dark:text-green-300
"


>


<span>

🤖 AI Summary

</span>


{

showSummary

?

<FiChevronUp/>

:

<FiChevronDown/>

}


</button>





{

showSummary && (


<p className="
mt-3
text-sm
text-gray-700
dark:text-gray-200
leading-relaxed
">


{note.summary}


</p>


)


}



</div>


)

}









{/* Buttons */}

<div className="
flex
gap-3
mt-6
flex-wrap
">





{/* Edit */}

<button

onClick={()=>onEdit(note)}

className="
p-3
rounded-xl
bg-blue-100
text-blue-600
hover:scale-110
transition
dark:bg-blue-900
dark:text-blue-300
"

title="Edit"

>

<FiEdit/>

</button>








{/* Delete */}

<button

onClick={()=>onDelete(note._id)}

className="
p-3
rounded-xl
bg-red-100
text-red-600
hover:scale-110
transition
dark:bg-red-900
dark:text-red-300
"

title="Delete"

>

<FiTrash2/>

</button>









{/* AI Summary */}

<button

onClick={()=>onSummary(note)}

className="
p-3
rounded-xl
bg-green-100
text-green-600
hover:scale-110
transition
dark:bg-green-900
dark:text-green-300
"

title="Generate Summary"

>

<FiCpu/>

</button>








{/* Quiz */}

<button

onClick={()=>onQuiz(note)}

className="
p-3
rounded-xl
bg-purple-100
text-purple-600
hover:scale-110
transition
dark:bg-purple-900
dark:text-purple-300
"

title="Generate Quiz"

>

<FiBookOpen/>

</button>





</div>





</div>


);


}


export default NoteCard;