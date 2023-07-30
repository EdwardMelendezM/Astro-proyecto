export const useRoutes = (pathname:string)=>{
  const enlaces = [
    {
      label: "Inicio",
      active: pathname === "/",
      path: "/"
    },
    {
      label: "Carreras",
      active: pathname === "/carreras",
      path: "/carreras"
    },
    {
      label: "Historias",
      active: pathname === "/historias",
      path: "/historias"
    },
    {
      label: "Comunidad",
      active: pathname === "/comunidad",
      path: "/comunidad"
    },
  ]
  return enlaces
}