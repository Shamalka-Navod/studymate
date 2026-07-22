import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import NoteCard from "../components/NoteCard";

import QuizModal from "../components/QuizModal";

import {
  getNotes,
  createNote,
  updateNote,
  deleteNote as deleteNoteApi,
  generateSummary as generateSummaryApi,
  generateQuiz as generateQuizApi,
} from "../services/api";


function Notes() {

  const [notes, setNotes] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);

  const [editId, setEditId] = useState(null);

  const [selectedQuiz, setSelectedQuiz] = useState([]);

  const [showQuizModal, setShowQuizModal] = useState(false);


  const [form, setForm] = useState({
    title: "",
    subject: "",
    content: "",
  });



  // Fetch Notes
  const fetchNotes = async () => {

    try {

      const res = await getNotes();

      setNotes(res.data);


    } catch(error) {

      console.log(error);

      toast.error("Failed to load notes");


    } finally {

      setLoading(false);

    }

  };



  useEffect(() => {

    fetchNotes();

  }, []);






  // Save Note
  const saveNote = async () => {

    try {


      if(
        !form.title ||
        !form.subject ||
        !form.content
      ){

        return toast.error(
          "Please fill all fields"
        );

      }



      if(editId){


        const res = await updateNote(
          editId,
          form
        );


        setNotes(
          notes.map(note =>
            note._id === editId
            ? res.data
            : note
          )
        );


        toast.success(
          "Note Updated Successfully ✨"
        );


      }else{


        const res = await createNote(form);


        setNotes([
          res.data,
          ...notes
        ]);


        toast.success(
          "Note Added Successfully 🎉"
        );

      }



      clearForm();


    }catch(error){

      console.log(error);

      toast.error(
        "Something went wrong"
      );

    }

  };







  // Edit Note
  const editNote = (note)=>{


    setForm({

      title: note.title,

      subject: note.subject,

      content: note.content

    });


    setEditId(note._id);

    setShowForm(true);


  };







  // Delete Note
  const deleteNote = async(id)=>{


    try{


      await deleteNoteApi(id);


      setNotes(
        notes.filter(
          note=>note._id !== id
        )
      );


      toast.success(
        "Note Deleted 🗑️"
      );


    }catch(error){

      console.log(error);

      toast.error(
        "Delete failed"
      );

    }


  };







  // AI Summary
  const generateSummary = async(note)=>{


    try{


      const res =
      await generateSummaryApi(
        note._id
      );


      setNotes(

        notes.map(n=>

          n._id === note._id

          ? res.data

          : n

        )

      );


      toast.success(
        "AI Summary Generated 🤖"
      );


    }catch(error){


      console.log(error);

      toast.error(
        "Summary generation failed"
      );


    }


  };







  // AI Quiz
  const generateQuiz = async(note)=>{


    try{


      const res =
      await generateQuizApi(
        note._id
      );



      setNotes(

        notes.map(n=>

          n._id === note._id

          ? {
              ...n,
              quiz:res.data.quiz
            }

          : n

        )

      );



      setSelectedQuiz(
        res.data.quiz
      );


      setShowQuizModal(true);



      toast.success(
        "Quiz Generated 📝"
      );



    }catch(error){


      console.log(error);

      toast.error(
        "Quiz generation failed"
      );


    }


  };







  // Clear Form
  const clearForm = ()=>{


    setForm({

      title:"",

      subject:"",

      content:""

    });


    setEditId(null);

    setShowForm(false);


  };







  // Search
  const filteredNotes = notes.filter(note=>

    note.title
    .toLowerCase()
    .includes(
      search.toLowerCase()
    )

  );







  return (

    <main className="flex-1 p-6">





      <div className="
        mt-8
        flex
        justify-between
        items-center
      ">


        <div>

          <h1 className="
            text-3xl
            font-bold
          ">

            My Notes 📚

          </h1>


          <p className="text-gray-500">

            Manage your study materials

          </p>

        </div>




        <button

          onClick={()=>
            setShowForm(!showForm)
          }

          className="
            bg-purple-600
            text-white
            px-5
            py-3
            rounded-xl
          "

        >

          + Add Note

        </button>


      </div>







      {
        showForm && (

          <div className="
            bg-white
            p-6
            rounded-2xl
            shadow
            mt-6
          ">


            <input

              className="
              w-full
              border
              p-3
              rounded-xl
              mb-3
              "

              placeholder="Title"

              value={form.title}

              onChange={(e)=>

                setForm({
                  ...form,
                  title:e.target.value
                })

              }

            />



            <input

              className="
              w-full
              border
              p-3
              rounded-xl
              mb-3
              "

              placeholder="Subject"

              value={form.subject}

              onChange={(e)=>

                setForm({
                  ...form,
                  subject:e.target.value
                })

              }

            />



            <textarea

              className="
              w-full
              border
              p-3
              rounded-xl
              mb-3
              "

              placeholder="Content"

              value={form.content}

              onChange={(e)=>

                setForm({
                  ...form,
                  content:e.target.value
                })

              }

            />



            <button

              onClick={saveNote}

              className="
              bg-green-600
              text-white
              px-5
              py-3
              rounded-xl
              "

            >

              {
                editId
                ?
                "Update Note"
                :
                "Save Note"
              }

            </button>


          </div>

        )
      }








      <input

        className="
        mt-6
        w-full
        p-4
        border
        rounded-xl
        "

        placeholder="Search notes..."

        value={search}

        onChange={(e)=>
          setSearch(e.target.value)
        }

      />








      {
        loading ?


        <div className="mt-10 text-center">

          Loading...

        </div>



        :

        <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
          mt-8
        ">


        {
          filteredNotes.map(note=>(


            <NoteCard

              key={note._id}

              note={note}

              onDelete={deleteNote}

              onEdit={editNote}

              onSummary={generateSummary}

              onQuiz={generateQuiz}

            />


          ))
        }


        </div>

      }






      {
        showQuizModal && (

          <QuizModal

            quiz={selectedQuiz}

            onClose={()=>
              setShowQuizModal(false)
            }

          />

        )
      }




    </main>

  );

}


export default Notes;