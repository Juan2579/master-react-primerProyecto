import React, { useState } from 'react'
import { saveInStorage } from '../helpers/saveInStorage'

export const Crear = ({setList}) => {

  const tituloComponente = "Añadir pelicula"

  const [movie, setMovie] = useState({
    title: "",
    description: "",
  })

  const { title, description } = movie

  const getFormValues = (e) => {
    e.preventDefault()

    const target = e.target
    const title = target.titulo.value
    const description = target.descripcion.value

    const movie = {
      id: new Date().getTime(),
      title,
      description
    }

    //Guardar estado
    setMovie(movie)

    //Actualizar el estado del listado de peliculas
    setList(previousState => ([
      ...previousState,
      movie
    ]))

    //Guardar en el almacenamiento local
    saveInStorage("movies", movie)

  }

  

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      {(title && description) && 
        <strong>
          Has creado la peli {title}
        </strong>}
      <form onSubmit={getFormValues}>
        <input 
          type="text" 
          id="title" 
          placeholder="Titulo" 
          name='titulo'
        />
        <textarea 
          id="description" placeholder="Descripción"
          name='descripcion'
        >
        </textarea>
        <input 
          type="submit" 
          id="save" 
          value="Guardar" 
        />
      </form>
    </div>
  )
}
