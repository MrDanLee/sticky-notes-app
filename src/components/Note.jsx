export function Note({ note, onDelete }) {
  return (
    <div style={{
      backgroundColor: note.color,
      padding: "15px",
      margin: "10px",
      borderRadius: "5px",
      width: "200px",
      minHeight: "100px",
      display: "inline-block",
      position: "relative",
      boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
    }}>
      <p>{note.text}</p>
      <button
        onClick={() => onDelete(note.id)}
        style={{ position: "absolute", top: "5px", right: "5px", cursor: "pointer" }}
      >
        X
      </button>
    </div>
  )
}
