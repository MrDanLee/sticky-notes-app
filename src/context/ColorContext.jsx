import { createContext, useState } from "react"

export const ColorContext = createContext()

export function ColorProvider({ children }) {
  const [color, setColor] = useState("#f7e87d")

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  )
}
