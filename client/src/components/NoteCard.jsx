import {
  FiTrash2,
  FiEdit,
  FiCpu
} from "react-icons/fi";


function NoteCard({
  note,
  onDelete,
  onEdit,
  onSummary
}) {


  return (

    <div className="
      bg-white
      rounded-2xl
      p-6
      shadow-md
      hover:shadow-xl
      transition
    ">


      <h3 className="
        text-xl
        font-bold
      ">
        {note.title}
      </h3>



      <span className="
        inline-block
        mt-3
        bg-purple-100
        text-purple-700
        px-3
        py-1
        rounded-full
      ">

        {note.subject}

      </span>



      <p className="
        mt-4
        text-gray-600
      ">

        {note.content}

      </p>




      {
        note.summary && (

        <div className="
          mt-4
          bg-green-100
          p-3
          rounded-xl
        ">

          🤖 {note.summary}

        </div>

        )
      }




      <div className="
        flex
        gap-3
        mt-5
      ">


        <button

        onClick={()=>onEdit(note)}

        className="
        bg-blue-100
        text-blue-600
        p-3
        rounded-xl
        ">

          <FiEdit/>

        </button>




        <button

        onClick={()=>onDelete(note._id)}

        className="
        bg-red-100
        text-red-600
        p-3
        rounded-xl
        ">

          <FiTrash2/>

        </button>




        <button

        onClick={()=>onSummary(note)}

        className="
        bg-green-100
        text-green-600
        p-3
        rounded-xl
        ">

          <FiCpu/>

        </button>



      </div>


    </div>

  );

}


export default NoteCard;