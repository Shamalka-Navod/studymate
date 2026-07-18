import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import NoteCard from "../components/NoteCard";
import Navbar from "../components/Navbar";


function Notes() {

  const [notes, setNotes] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);

  const [editId, setEditId] = useState(null);


  const [form, setForm] = useState({
    title: "",
    subject: "",
    content: ""
  });



  // Fetch Notes
  useEffect(() => {

    const fetchNotes = async () => {

      try {

        const res = await axios.get(
          "http://localhost:5000/api/notes"
        );

        setNotes(res.data);


      } catch (error) {

        console.log(error);

        toast.error("Failed to load notes");

      } finally {

        setLoading(false);

      }

    };


    fetchNotes();

  }, []);





  // Add / Update Note
  const saveNote = async () => {


    try {


      if (editId) {


        const res = await axios.put(

          `http://localhost:5000/api/notes/${editId}`,

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


      } else {


        const res = await axios.post(

          "http://localhost:5000/api/notes",

          form

        );


        setNotes([

          res.data,

          ...notes

        ]);


        toast.success(
          "Note Added Successfully 🎉"
        );


      }



      clearForm();



    } catch (error) {


      console.log(error);

      toast.error(
        "Something went wrong"
      );


    }


  };






  // Edit Note
  const editNote = (note) => {


    setForm({

      title: note.title,

      subject: note.subject,

      content: note.content

    });


    setEditId(note._id);

    setShowForm(true);


  };







  // Delete Note
  const deleteNote = async (id) => {


    try {


      await axios.delete(

        `http://localhost:5000/api/notes/${id}`

      );


      setNotes(

        notes.filter(

          note => note._id !== id

        )

      );


      toast.success(
        "Note Deleted 🗑️"
      );


    } catch (error) {


      console.log(error);

      toast.error(
        "Delete failed"
      );


    }


  };







  // AI Summary
  const generateSummary = async (note) => {


    const summary =

      note.content.substring(0, 100) + "...";



    try {


      const res = await axios.put(

        `http://localhost:5000/api/notes/${note._id}`,

        {

          ...note,

          summary

        }

      );



      setNotes(

        notes.map(n =>

          n._id === note._id

          ? res.data

          : n

        )

      );



      toast.success(
        "AI Summary Generated 🤖"
      );


    } catch (error) {


      console.log(error);

      toast.error(
        "Summary failed"
      );


    }


  };






  // Clear Form
  const clearForm = () => {


    setForm({

      title: "",

      subject: "",

      content: ""

    });


    setEditId(null);

    setShowForm(false);


  };






  // Search
  const filteredNotes = notes.filter(note =>

    note.title
      .toLowerCase()
      .includes(search.toLowerCase())

  );







  return (

    <main className="flex-1 p-6">


      <Navbar />



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
            text-gray-800
          ">
            My Notes 📚
          </h1>


          <p className="text-gray-500">
            Manage your study materials
          </p>

        </div>




        <button

          onClick={() => setShowForm(!showForm)}

          className="
          bg-purple-600
          text-white
          px-5
          py-3
          rounded-xl
          hover:bg-purple-700
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

              onChange={(e) =>

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

              onChange={(e) =>

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

              onChange={(e) =>

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

                ? "Update Note"

                : "Save Note"

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
        rounded-xl
        border
        "

        placeholder="Search notes..."

        value={search}

        onChange={(e) =>

          setSearch(e.target.value)

        }

      />









      {

        loading ? (


          <div className="
            mt-10
            flex
            justify-center
          ">


            <div className="
              w-10
              h-10
              border-4
              border-purple-600
              border-t-transparent
              rounded-full
              animate-spin
            ">


            </div>


          </div>


        )


        : filteredNotes.length === 0 ? (


          <div className="
            mt-10
            bg-white
            p-10
            rounded-2xl
            text-center
          ">


            <h2 className="
              text-2xl
              font-bold
            ">

              No Notes Found 📚

            </h2>


            <p className="text-gray-500">

              Add your first study note

            </p>


          </div>


        )


        : (


          <div className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            mt-8
          ">


            {

              filteredNotes.map(note => (


                <NoteCard

                  key={note._id}

                  note={note}

                  onDelete={deleteNote}

                  onEdit={editNote}

                  onSummary={generateSummary}

                />


              ))

            }


          </div>


        )


      }



    </main>

  );

}


export default Notes;