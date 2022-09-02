import React from 'react'
import LevelBar from './LevelBar/LevelBar'
import "./cart.scss"

const Cart = (props) => {
  return (
    <>
        <div className="container">
            <div className="title">
                <h2>{props.data.tittle}</h2>
            </div>
            <img className="image"
                src={props.data.image} alt="imagen campus"
            />
            <div className="stats">
                <LevelBar number={props.data.nivelAcademico} title={"Nivel academico"}/>
                <LevelBar number={props.data.accesoTransportePublico} title={"Acceso transporte publico"}/>
                <LevelBar number={props.data.nivelProfesores} title={"Nivel profesores"}/>
                <LevelBar number={props.data.ambiente} title={"Ambiente"}/>
                <LevelBar number={props.data.demandaHoraria} title={"Demanda horaria"}/>
            </div>
        </div>
    </>
  )
}

export default Cart