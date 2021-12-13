import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { notesDummy } from "../seed/notes-dummy";

function NotesPage(props) {
  const notes = notesDummy;

  return (
    <>
      <h1>Notes List</h1>
      <div>
        {notes.map((note, key) => {
          return (
            <Button
              variant="contained"
              component={Link}
              key={key}
              to={`/notes/${note.title}`}
            >
              {note.title}
            </Button>
          );
        })}
      </div>
    </>
  );
}

export default NotesPage;
