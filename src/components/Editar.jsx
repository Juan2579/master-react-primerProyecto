import React from 'react'

export const Editar = ({movie, getMovies, setEdit, setList}) => {
  const titleComponent = "Editar pelicula"

  const saveEdit = (e, id) => {
    e.preventDefault()

    //Conseguir el target del evento
    const target = e.target

    //Buscar el indice del objeto de la pelicula actualizar
    const storageMovies = getMovies()
    const index = storageMovies.findIndex(movie => movie.id === id)

    //Crear objeto con ese indice
    const movieUpdated = {
      id,
      title: target.title.value,
      description: target.description.value
    }

    //Actualizar la pelicula
    storageMovies[index] = movieUpdated

    //Guardar el nuevo array de objetos en el localStorage
    localStorage.setItem("movies", JSON.stringify(storageMovies))

    //Actualizar estado
    setList(storageMovies)
    setEdit(0)

  }



  return (
    <div className='edit_form'>
      <h3 className='title'>{titleComponent}</h3>
      <form onSubmit={(e) => saveEdit(e, movie.id)}>
        <input type="text" name='title' className='titulo_editado'
        defaultValue={movie.title} />
        <textarea name="description" defaultValue={movie.description} className='descripcion_editada'/>
        <input type="submit" className='editar' value="Actualizar" />
      </form>
    </div>
  )
}
