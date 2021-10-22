import React  from "react";
import { useParams } from "react-router";
import {notesDummy} from "../seed/notes-dummy";


function NoteDetailPage(props) {
  const title = useParams().title
  const notes = notesDummy
  const note = notes.find((note) => note.title === title)


  return (
    <>
    {note ? 
      <>
        <h1>{note?.title}</h1>
        <p>
          {note?.content}
        </p>
      </> : 
      <h1>Note Tidak Ditemukan</h1>
      }
      
    </>
  )
}

export default NoteDetailPage;
