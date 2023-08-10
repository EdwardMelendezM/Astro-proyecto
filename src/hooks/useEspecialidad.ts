type CareerId = string | undefined
type EspecialidadType = "ingenieria-informatica" | "elect";

type AsignatureItem = {
  id: string;
  asignature: string;
};


export const useEspecialidad = (careerId: CareerId) =>{
  
  const especialidad: Record<EspecialidadType, AsignatureItem[]> = {
    "ingenieria-informatica": [
      {
        id: "ciencias-basicas",
        asignature: "Ciencias Basicas"
      },
      {
        id: "ciencias-de-la-computacion",
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
        id: "inteligencia-artificial",
        asignature: "Inteligencia Artificial"
      },
      {
        id: "investigacion",
        asignature: "Investigacion"
      }
    ],
    "elect": [
      {
        id: "ciencias-basicas",
        asignature: "Ciencias Basicas"
      },
      {
        id: "ciencias-de-la-computacion",
        asignature: "Ciencias de la computacion"
      },
    ],
  }
  
  return especialidad[careerId as EspecialidadType]
} 