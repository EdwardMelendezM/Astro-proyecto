
interface TodoInputProps{
  valueTodo:string
  setValueTodo:(value:string)=>void
  handleOnSubmit:(e:Event)=>void
}

const TodoInput = ({ 
  valueTodo,
  setValueTodo,
  handleOnSubmit
 }: TodoInputProps) => {
  return ( 
    <form
      className="flex justify-between px-3 mt-3 gap-x-2"
      onSubmit={handleOnSubmit}
    >
      <input
        type="text"
        placeholder="Ingresa todo"
        className="w-full px-3 py-2 rounded-lg outline-none"
        value={valueTodo}
        onInput={(e) => setValueTodo(String((e.target as any).value))}
      />
      <input
        type="submit"
        className="rounded-lg px-4 py-3 bg-gray-700 text-gray-300 hover:bg-gray-600 transition"
        value={"More"}
      />
    </form>
   );
}
 
export default TodoInput;