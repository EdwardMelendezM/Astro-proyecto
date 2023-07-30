import { useRef, useState } from "preact/hooks";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, seterror] = useState(false);
  const refEmail = useRef<HTMLInputElement>(null)
  const refPassword = useRef<HTMLInputElement>(null)

  const onSubmit=(e:Event)=>{
    e.preventDefault()

    
    if (email.trim().length < 2 || password.trim().length < 2){
      if (email.trim().length < 2 && refEmail && refEmail.current){
        refEmail.current.focus()
        return;
      }
      if (password.trim().length < 2 && refPassword && refPassword.current) {
        refPassword.current.focus()
        return;
      }
    }
    // const res = axios.post("")
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setEmail("")
      setPassword("")
    }, 2000);
    

  }

  return ( 
    <form
      onSubmit={onSubmit}
      className="mt-7 mb-11 w-full flex flex-col items-center justify-center gap-y-5">
      <div className="flex flex-col gap-y-4 px-4">
        <h1 className="text-center font-bold text-4xl">Ingrese su cuenta</h1>
        <h1 className="text-center text-gray-600 text-lg">Ingrese con su correo y contraseña</h1>
      </div>
      <div className="mb-2 mt-6 w-screen max-w-lg flex items-center justify-center flex-col gap-y-5 px-6">
        <input
          type="text"
          className="w-full max-w-sm px-4 py-2 rounded-lg  border-2 border-gray-400 outline-none disabled:bg-slate-200 disabled:text-gray-600" 
          placeholder="Direccion de correo electronico"
          value={email}
          onInput={(e) => setEmail((e.target as any).value)}
          disabled={isLoading}
          ref={refEmail}
          />
        <input
          type="password"
          className="w-full max-w-sm px-4 py-2 rounded-lg  border-2 border-gray-400 outline-none disabled:bg-slate-200 disabled:text-gray-600" 
          placeholder="Contraseña"
          value={password}
          onInput={(e) => setPassword((e.target as any).value)}
          disabled={isLoading}
          ref={refPassword}
        />
      </div>
      <a href="/" className="text-sm text-blue-600 font-medium hover:text-blue-500 transition" >¿Reestablecer contraseña?</a>

      <button
        type={"submit"}
        className="w-screen max-w-sm  py-2 text-center bg-slate-900 rounded-lg text-gray-50 transition hover:bg-slate-700 disabled:hover:bg-slate-600 disabled:text-gray-300"
        disabled={isLoading}
        >
        Continuar
      </button>

      <div className="flex gap-x-1">
        <p className="font-medium text-sm text-gray-600">¿No tienes cuenta?</p>
        <a href="/" className="font-medium text-sm text-blue-600 hover:text-blue-500 transition">registrate</a>
      </div>
    </form>
   );
}
 
export default Login;