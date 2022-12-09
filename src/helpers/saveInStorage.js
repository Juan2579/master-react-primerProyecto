export const saveInStorage = (key, element) => {

  //Conseguir los elementos que ya tenemos en localstorage
  let elements = JSON.parse(localStorage.getItem(key))

  //Comprobar si es un array
  if(Array.isArray(elements)){
    //Añadir una nueva pelicula
    elements.push(element)
  }else{
    //Crear un array con la nueva pelicula
    elements = [element]
  }

  //Guardar en el localstorage
  localStorage.setItem(key, JSON.stringify(elements))
  //Devolver objeto guardado

  return element
}