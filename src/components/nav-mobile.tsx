
interface NavMobileProps{
  isActive:boolean
  onClose:()=>void
}

const NavMobile = ({ isActive, onClose }: NavMobileProps) => {
  return (
    <>
      {
        isActive && <div className="block lg:hidden fixed inset-0 bg-[rgba(255,255,255,0.95)] scroll-m-0" >
          <div className="flex justify-center items-center pt-20 flex-col gap-y-10 z-50">
            <h1 className="text-3xl">TuGuía</h1>
            <a href="/" className="hover:text-gray-600" >Home</a>
            <a href="/carreras" className="hover:text-gray-600" >Carreras</a>
            <a href="/historias" className="hover:text-gray-600" >Historias</a>
            <a href="/comunidad" className="hover:text-gray-600" >Comunidad</a>
          </div>
          <div
            onClick={onClose}
            className="absolute top-10 right-10 hover:opacity-70 hover:cursor-pointer">
            <img src="/icons/close.svg" alt="" />
          </div>
        </div >
      }
    </>
   );
}
 
export default NavMobile;