import { useState } from 'preact/hooks'

const Todo = () => {
  const [valueTodo, setValueTodo] = useState("");
  return ( 
    <div>
      <input
        type="text"
        placeholder="Ingresa todo"
        onInput={(e) => setValueTodo((e.target as any).value)}
      />
    </div>
   );
}
 
export default Todo;