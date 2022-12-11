import React, { useState } from 'react'

export const Buscador = ({list, setList}) => {

  const [search, setSearch] = useState("")
  const [notFound, setNotFound] = useState(false)

  const searchMovie = (e) => {
    //Crear estado y actualizarlo
    setSearch(e.target.value)

    //Filtrar para buscar coincidencias
    let filteredMovies = list.filter(movie => {
      return movie.title.toLowerCase().includes(search.toLowerCase())
    })
    //Comprobar si hay un resultado
    if(search.length == 1 || filteredMovies.length === 0){
      filteredMovies = JSON.parse(localStorage.getItem("movies"))
      setNotFound(true)
    }else{
      setNotFound(false)
    }

    //Actualizar estado del listado principal con lo que he logrado filtrar
    setList(filteredMovies)

  }

  return (
    <div className="search">
      <h3 className="title">Buscador: {search}</h3>
      {(notFound && search.length > 1) && 
      <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>}
      
      <form>
          <input 
            type="text" 
            id="search_field"
            name='busqueda'
            autoComplete='off'
            onChange={searchMovie}
          />
          <button id="search">Buscar</button>
      </form>
    </div>
  )
}
