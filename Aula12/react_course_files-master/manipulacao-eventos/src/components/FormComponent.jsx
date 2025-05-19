import React, { useState } from "react"

export default function FormComponent() {

  const [count, setCount] = useState(0)

    const adiciona = (event) => {
      event.preventDefault()
        setCount(count + 1)
    }

  return (
    <form>
      <p>Resultado: {count}</p>
      <button name="buttonAdiciona" onClick={adiciona}>Adiciona</button>
    </form>
  )
}
