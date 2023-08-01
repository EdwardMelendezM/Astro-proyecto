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
      id: crypto.randomUUID(),
      asignature: "Ingenieria computacional"
    },
    {
      id: "46345345345",
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