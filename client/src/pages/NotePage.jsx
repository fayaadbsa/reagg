import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { notesDummy } from "../seed/notes-dummy";

function NotePage(props) {
  const title = useParams().title;
  const notes = notesDummy;
  const note = notes.find((note) => note.title === title);

  const [noteInfo, setNoteInfo] = useState({ like: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/notes/${title}`);
      const body = await res.json();
      setNoteInfo({ like: body?.like });
    };
    fetchData();
  }, [title]);

  const handleLike = async () => {
    const res = await fetch(`/api/notes/${title}/like`, { method: "POST" });
    const body = await res.json();
    setNoteInfo({ like: body?.like });
  };

  return (
    <>
      {note ? (
        <>
          <h1>{note?.title}</h1>
          <h3>Likes Count: {noteInfo?.like}</h3>
          <Button variant="contained" onClick={handleLike}>
            LIKE
          </Button>
          <p>{note?.content}</p>
        </>
      ) : (
        <h1>Note Tidak Ditemukan</h1>
      )}
    </>
  );
}

export default NotePage;
