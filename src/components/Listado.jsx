import React, { useEffect, useState } from 'react'

export const Listado = ({list, setList}) => {

  //const [list, setList] = useState([])

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies"))

    movies ? setList(movies) : setList([])

  }

  

  return (
    <>
      
      {list.length ? list.map(movie => {
        return(
          <article key={movie.id} className="peli-item">
            <h3 className="title">{movie.title}</h3>
            <p className="description">{movie.description}</p>

            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </article>
        )
      })
        : <h2>No hay peliculas creadas</h2>
      }
      
    </>
  )
}
