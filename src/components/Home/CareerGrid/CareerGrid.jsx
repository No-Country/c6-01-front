import React, { useEffect, useState } from 'react'
import Cart from './Cart/Cart'
import "./careerGrid.scss"

const CareerGrid = (props) => {

    const { careers, setCareers, careersFilteredByNivelAcademico,
        careersFilteredByAccesoTransporte, careersFilteredByNivelProfesores,
        careersFilteredByAmbiente, careersFilteredByDemanda } = props

  return (
    <>
        <div className="careers-grid">
            <div className="filterbar">
                <button className="button" onClick={(e) => setCareers(careersFilteredByNivelAcademico)}>
                    Nivel academico</button>
                <button className="button" onClick={(e) => setCareers(careersFilteredByAccesoTransporte)}>
                    Acceso transporte publico</button>
                <button className="button" onClick={(e) => setCareers(careersFilteredByNivelProfesores)}>
                    Nivel profesores</button>
                <button className="button" onClick={(e) => setCareers(careersFilteredByAmbiente)}>
                    Ambiente</button>
                <button className="button" onClick={(e) => setCareers(careersFilteredByDemanda)}>
                    Demanda horaria</button>
            </div>
            <h1 className="h1">Las universidades de tu futura carrera según </h1>
            <h2 className="h2">el nivel académico</h2>
            <div className="carts-container">
                {
                    careers.map( (career, i) => (
                        <Cart data={career} key={i}/>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default CareerGrid
