import React, { useEffect, useState } from 'react'
import { Editar } from './Editar'

export const Listado = ({list, setList}) => {

  //const [list, setList] = useState([])

  const [edit, setEdit] = useState(0)

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies"))

    movies ? setList(movies) : setList([])

    return movies
  }

  const deleteMovie = (id) => {
    //Conseguir peliculas almacenadas
    const storageMovies = getMovies()
    //Filtrar esas peliculas para que elimine del array la que quiero
    const newMovies = storageMovies.filter(movie => movie.id !== parseInt(id))
    //Actualizar estado del listado
    console.log(storageMovies, newMovies)
    setList(newMovies)
    //Actualizar los datos en el localStorage
    localStorage.setItem("movies", JSON.stringify(newMovies))
  }

  return (
    <> 
      {list.length ? list.map(movie => {
        return(
          <article key={movie.id} className="peli-item">
            <h3 className="title">{movie.title}</h3>
            <p className="description">{movie.description}</p>

            <button onClick={() => {
              setEdit(movie.id)
            }} className="edit">Editar</button>
            <button onClick={() => deleteMovie(movie.id)} className="delete">Borrar</button>

            {/* Formulario de editar */}
            {edit === movie.id && (
              <Editar movie={movie} getMovies={getMovies} setEdit={setEdit} setList={setList} />
            )}
          </article>

        )
      })
        : <h2>No hay peliculas creadas</h2>
      }
      
    </>
  )
}
