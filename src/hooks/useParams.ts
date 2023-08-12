const useParams = (searchParams:any) => {
  // Obtener la cadena de búsqueda de la URL
  const params = new URLSearchParams(searchParams)
  // Crear un objeto vacío
  const paramsObject = {};
  // Recorrer los pares clave-valor en URLSearchParams
  for (const [key, value] of params.entries()) {
    paramsObject[key] = value;
  }

  return paramsObject
}
 
export default useParams;
