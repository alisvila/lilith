import React from 'react'
import Cell from './Cell'

type Display = {
    ax: {x : number, y: number}
    value: string
}

export default function Row(props: any) {
    const cells: any = []
    const determineDisplay = ({ax, value} : Display) => {
        return value
    }

    const changeValue = () => {
        console.log("5")
    }

    for (let i = 0; i < props.x + 1; i++){
        cells.push(
            <Cell
                id={props.id}
                key={`${i}-${props.y}-${props.id}`}
                y={props.y}
                x={i}
                handleChange={props.handleChange}
                value={props.rowData[i]}
                determineDisplay={determineDisplay}
                changeValue={changeValue}
            />
        )
    }

  return (
    <>
        {cells}
    </>
  )
}
