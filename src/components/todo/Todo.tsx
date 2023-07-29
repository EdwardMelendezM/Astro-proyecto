import { useState } from 'preact/hooks'
import TodoInput from './todo-input'
import TodoItem from './todo-item'

export interface todoProps{
  id:string
  text:string
  done:boolean
}
const listTodo= [
  {
    id:crypto.randomUUID(),
    text: "Ir a comer",
    done:true
  },
  {
    id: crypto.randomUUID(),
    text: "Saltar de la silla",
    done: false
  }
]

const Todo = () => {
  const [valueTodo, setValueTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Array<todoProps>> (listTodo);


  const handleOnSubmit = (e:Event) =>{
    e.preventDefault();
    if(valueTodo.trim().length<3) return;
    setTodoList(todo => [...todo, {
      id: crypto.randomUUID(),
      text: valueTodo,
      done: false
    }])
    setValueTodo("")
  }

  const deleteTodo = (id: string ) =>{
    setTodoList(todo=>[...todo.filter((item)=>item.id!==id)])
  }
  const editCheckbox = (id: string) => {
    setTodoList(todo => [
      ...todo.map((item)=>item.id===id ? {
        ...item,
        done:!item.done
      } : item)
    ])
  }


  return ( 
    <div className="mx-auto w-2/3 h-min-[100vh] bg-[rgba(255,255,255,0.7)] rounded-lg px-6 py-4">
      <h1 className="mt-8 text-5xl text-center text-gray-600" >Todo</h1>
      <TodoInput
        handleOnSubmit={handleOnSubmit}
        setValueTodo={setValueTodo}
        valueTodo={valueTodo}
      />
      <div className="mt-4 px-3 py-4">
        {
          todoList.map((item)=>(
            <TodoItem
              item={item}
              deleteTodo={deleteTodo}
              editCheckbox={editCheckbox}
            />
          ))
        }
        {
          valueTodo
        }
      </div>
      
    </div>
   );
}
 
export default Todo;