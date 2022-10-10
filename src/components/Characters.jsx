
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { oneCharacter } from '../functions/functions'
import '../../public/styles.css'

const Characters = () => {
    const [ personaje, setpersonaje ] = useState(null)

    const params = useParams()
    useEffect(() => {
     oneCharacter(params.id, setpersonaje)
    }, [])
    

    return (
        <div className='character__container'>
        { personaje != null ? (
            <div className='character__container-article'>
                <h2 className='character__container-title'>Este es un personaje con el id {params.id}</h2>
                <p className='character__container-name'>Su nombre es {personaje.name} </p>
                <img className='character__container-image' src={personaje.image} alt="" />
            </div> 
       ) :
       ('Cargando Personaje')
       }
            <button className='character__button'> <a className='character__button-text' href='/'>Regresar</a> </button>
        </div>
    )
}

export default Characters