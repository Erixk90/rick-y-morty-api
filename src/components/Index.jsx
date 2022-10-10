
import React, { useEffect, useState } from "react"
import { allCharacters } from "../functions/functions"
import '../../public/styles.css'



const Index = () => {
    const [ personajes, setpersonajes] = useState(null) /* el null es para que quede nulo y no traiga un array vacio */

useEffect(() => {
  allCharacters(setpersonajes)
  }, [])


    return (
        <>

        <h2 className="title__section"> Los personajes son: </h2>

        <div className="index__container">
            {personajes!= null ? 
            (personajes.map(personaje => (
                <div className="index__container-character" key={personaje.id}>
                    <a className="index__container-character-link" href={`/character/${personaje.id}`}>{personaje.name}</a>
                </div>
            )))
            :('Cargando ...')}
        </div> 

        </>
    )
}

export default Index