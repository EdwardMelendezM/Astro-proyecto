import { useState } from "preact/hooks";
import { useRoutes } from "../hooks/useRoutes";
import NavMobile from "./nav-mobile";

interface NavbarProps{
  pathname:string
}

const Navbar = ({ pathname }: NavbarProps) => {
  const [isActive, setIsActive] = useState(false);
  const routes = useRoutes(pathname);
  const onClose = ()=>{
    setIsActive(false)
  }
  return ( 
    <>
      <NavMobile isActive={isActive} onClose={onClose} />
      <nav class="w-screen flex px-6 py-8 justify-around">
        
        <div class="flex gap-x-3 justify-center items-center">
          <img src="/images/logo.png" class="w-16" />
          <a href="/" class="text-xl font-bold hover:text-gray-500 transition " > TuGuía </a>
        </div>

        <div class="hidden lg:flex gap-x-6 mt-4 ">
          {
            routes.map((item) => (
              <a
                href={`${item.path}`}
                class={`${item.active && "font-bold"} text-lg hover:text-gray-500 transition`}>
                {item.label}
              </a>
            ))
          }
        </div>
        <div class="hidden lg:flex  gap-x-5" >
          <a
            href="/login"
            class="mt-2 text-lg text-orange-500 font-medium border-none outline-none h-12 hover:text-orange-400 transition"
          >
            Iniciar session
          </a>
          <a
            href="/register"
            class="text-lg text-gray-100 font-medium border-none outline-none bg-orange-500 rounded-lg px-6 h-12 hover:bg-orange-400 transition flex items-center justify-center"
          >
            Registrarse
          </a>
        </div>
        <div class="flex lg:hidden">
          <div
            className="flex items-center mx-auto">
            <img
              src="/icons/menu.svg"
              alt="menu"
              className="w-8 h-8 hover:cursor-pointer hover:opacity-60"
              onClick={()=>setIsActive(true)}
            />
          </div>
        </div>
      </nav>
    </>
   );
}
 
export default Navbar;