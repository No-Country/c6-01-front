import React from 'react'
import "./levelbar.scss"

const LevelBar = (props) => {

    const { number, title } = props
    let levelArray = [];

    for(let i=0; i<number; i++) {
        levelArray.push("color");
    }

    if(levelArray.length < 5) {
        for(let i=0;i <= 5 - levelArray.length; i++) {
            levelArray.push("no-color");
        }
    }

    console.log(levelArray);


  return (
    <>
        <div className="container-levelbar">
            {
                levelArray.map( (color, i) => (
                    <div key={i} className={`${color} item`}>
                    </div>
                ))
            }
            <p>{title}</p>
        </div>
    </>
  )
}

export default LevelBar