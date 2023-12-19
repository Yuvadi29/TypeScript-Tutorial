import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import NewNote from "./components/NewNote";
import { useMemo, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { v4 as uuidV4 } from "uuid";


type Note = {
  id: string;
} & NoteData; //Add noteData to end of the Note type

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
}

export type Tag = {
  id: string;
  label: string;
}

export type RawNote = {
  id: string,
} & RawNoteData

export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[];
}

const App = () => {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<RawNote[]>("TAGS", []);

  const notesWithTags = useMemo(() => {
    return notes.map(note => {
      return {
        ...note,
        tags: tags.filter(tag => note.tagIds.includes(tag.id))
      }
    })
  }, [notes, tags]);

  const createNote = ({ tags, ...data }: NoteData) => {
    setNotes(prevNotes => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map(tag => tag.id) },
      ]
    })
  }

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App