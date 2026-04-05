import { useState } from "react"

export function useNotes() {
  const [notes, setNotes] = useState([])

  function addNote(text, color) {
    const newNote = {
      id: Math.random().toString(36).slice(2),
      text,
      color,
    }
    setNotes([...notes, newNote])
  }

  function deleteNote(id) {
    setNotes(notes.filter((n) => n.id !== id))
  }

  return { notes, addNote, deleteNote }
}
