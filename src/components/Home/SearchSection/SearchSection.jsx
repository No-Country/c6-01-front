import React, { useState } from 'react';
import "./searchSection.scss";

const SearchSection = (props) => {

    const { careers, setCareers } = props

    const [searchValue, setSearchValue] = useState("");

    const handleClick = () => {
        let value = careers.filter(x => x.tittle.includes(searchValue.toLowerCase()));
        console.log(value)
        setCareers(value);
    }

  return (
    <>
        <div className="container-search">
            <div className="buttons-container">
                <button className="button-search">Calificar una universidad</button>
                <button className="button-search">Agregar universidad</button>
            </div>
            <div className="icons-container">
                <div className="busca-universidad-icon-p">
                    <img src="busca-tu-carrera.png" alt="busca tu carrera" />
                    <p>y mirá en qué universidad está mejor calificada</p>
                </div>
                <img src="busca-ilustracion.png" alt="busca ilustracion" />
            </div>
            <div className="searchbar-container">
                <img className="lapicero" src="lapicero.png" alt="lapicero"/>
                <div className="buscador">
                    <div className="search-div">
                        <img src="search-icon.png" alt="searc icon"/>
                        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="¿Qué carrera querés estudiar?"/>
                        <img src="audio-icon.png" alt="audio icon" />
                    </div>
                    <div className='flex'>
                        <button onClick={handleClick} className="button-search button-search-buscar">Buscar</button>
                        <button onClick={(e) => setSearchValue("")} className="button-search">Borrar</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SearchSection