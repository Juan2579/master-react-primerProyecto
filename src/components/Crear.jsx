import React, { useState } from 'react'

export const Crear = () => {

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

    //Guardar en el almacenamiento local
    guardarEnStorage(movie)
  }

  const guardarEnStorage = movie => {

    //Conseguir los elementos que ya tenemos en localstorage
    let elements = JSON.parse(localStorage.getItem("movies"))

    //Comprobar si es un array
    if(Array.isArray(elements)){
      //Añadir una nueva pelicula
      elements.push(movie)
    }else{
      //Crear un array con la nueva pelicula
      elements = [movie]
    }

    //Guardar en el localstorage
    localStorage.setItem("pelis", JSON.stringify(elements))
    //Devolver objeto guardado

    return movie
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
