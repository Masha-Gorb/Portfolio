import React, {useState} from 'react';


function exam212() {

function Colorize() {

  const [color, setColor] = useState<string>("black")
  const colors = ["red", "yellow", "green", "blue", "violet", "chartreuse"]

  const styles = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "black"
  }

  const getColor = (colors: string[]) => {
    const nextColor = colors[Math.floor(Math.random() * colors.length)]
    return nextColor
  }

  return (
    <main>
      <div style={{...styles, backgroundColor: color}}/>
      <div>
        <button
          onClick={() => setColor(getColor(colors))}
        >
          Get random color
        </button>
      </div>
    </main>
  )
}
}