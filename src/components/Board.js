import React from 'react'
import Square from './Square'

const style = {
  border: '4px solid darkblue',
  borderRadius: '10px',
  width: '300px',
  height: '300px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr)/repeat(3, 1fr)'
}

const Board = ({squares, onClick}) => (
  <div style={style}>
    <Square value="1" onClick={() => onClick("Dummy value")} />
    <Square value="2" onClick={() => onClick("Dummy value")} />
    <Square value="3" onClick={() => onClick("Dummy value")} />
    <Square value="4" onClick={() => onClick("Dummy value")} />
    <Square value="5" onClick={() => onClick("Dummy value")} />
    <Square value="6" onClick={() => onClick("Dummy value")} />
    <Square value="7" onClick={() => onClick("Dummy value")} />
    <Square value="8" onClick={() => onClick("Dummy value")} />
    <Square value="9" onClick={() => onClick("Dummy value")} />
  </div>
)

export default Board