import { ColorProvider } from "./context/ColorContext"
import { ColorSelector } from "./components/ColorSelector"
import { NoteBoard } from "./components/NoteBoard"

function App() {
  return (
    <ColorProvider>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h1>Sticky Notes</h1>
        <ColorSelector />
        <NoteBoard />
      </div>
    </ColorProvider>
  )
}

export default App
