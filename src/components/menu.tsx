// import menuProvider from "../providers/menu-provider";
interface MenuProps{
  setIsActive:(state:boolean)=>void
}
const Menu = ({ setIsActive }: MenuProps) => {
  

  const handleOnClick=()=>{
    console.log(setIsActive)
    setIsActive(true) 
  }
  

  return ( 
    <div
      className="flex items-center mx-auto">
      <img
        src="/icons/menu.svg"
        alt="menu"
        className="w-8 h-8 hover:cursor-pointer hover:opacity-60"
        onClick={handleOnClick}
      />
    </div>
   );
}
 
export default Menu;