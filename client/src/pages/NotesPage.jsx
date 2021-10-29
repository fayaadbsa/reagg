import React  from "react";
import { Link } from "react-router-dom";
import {notesDummy} from "../seed/notes-dummy";

function NotesPage(props) {
  const notes = notesDummy
  

  return (
    <>
    <h1>Notes List</h1>
    {notes.map((note, key) => {
      return (
        <Link key={key} to={`/notes/${note.title}`}>
          <h4>{note.title}</h4>
        </Link>
      );
    })}
    </>
  )
}

export default NotesPage;
