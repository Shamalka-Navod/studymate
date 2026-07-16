import { useEffect, useState } from "react";

function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/notes")
            .then((res) => res.json())
            .then((data) => {
                setNotes(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>StudyMate Notes</h1>

            {notes.map((note) => (
                <div key={note._id}>
                    <h2>{note.title}</h2>
                    <p>{note.subject}</p>
                    <p>{note.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Notes;