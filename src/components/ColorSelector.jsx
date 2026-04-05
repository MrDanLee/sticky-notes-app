import { useContext } from "react"
import { ColorContext } from "../context/ColorContext"

export function ColorSelector() {
  const { color, setColor } = useContext(ColorContext)

  return (
    <div style={{ marginBottom: "20px" }}>
      <label>Color de nota: </label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  )
}
