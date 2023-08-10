export const useEspecialidad =()=>{
  
  const especialidad = [
    {
      id: crypto.randomUUID(),
      asignature: "Ciencias Basicas"
    },
    {
      id: crypto.randomUUID(),
      asignature: "Ciencias de la computacion"
    },
    {
      id: "ingenieria-computacional",
      asignature: "Ingenieria computacional"
    },
    {
      id: "ingenieria-software",
      asignature: "Ingenieria de software"
    },
    {
      id: crypto.randomUUID(),
      asignature: "Inteligencia Artificial"
    },
    {
      id: crypto.randomUUID(),
      asignature: "Investigacion"
    }
  ]
  return { especialidad }
}