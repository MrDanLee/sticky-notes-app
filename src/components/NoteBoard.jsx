import { useState, useContext } from "react"
import { ColorContext } from "../context/ColorContext"
import { useNotes } from "../hooks/useNotes"
import { Note } from "./Note"

export function NoteBoard() {
  const [text, setText] = useState("")
  const { color } = useContext(ColorContext)
  const { notes, addNote, deleteNote } = useNotes()

  function handleAdd() {
    if (text.trim() === "") return
    addNote(text, color)
    setText("")
  }

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe tu nota..."
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button onClick={handleAdd} style={{ padding: "8px 16px" }}>Añadir</button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {notes.length === 0 && <p>No hay notas todavia</p>}
        {notes.map((note) => (
          <Note key={note.id} note={note} onDelete={deleteNote} />
        ))}
      </div>
    </div>
  )
}
