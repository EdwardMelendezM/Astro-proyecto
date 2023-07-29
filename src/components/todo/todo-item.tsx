import type { todoProps } from "./Todo";

interface TodoItemProps{
  item: todoProps,
  deleteTodo: (itemEdit: string) => void
  editCheckbox: (itemEdit: string) => void
}

const TodoItem = ({ item, deleteTodo, editCheckbox } : TodoItemProps) => {
  return ( 
    <div key={item.id} className="py-3 flex gap-x-3 justify-between">
      <div className="flex gap-x-3">
        <input
          className="w-[19px] h-[19px]rounded-full focus:ring-blue-500 text-blue-600"
          type={"checkbox"}
          checked={item.done}
          onClick={() => editCheckbox(item.id)}
        />
        <div className="text-lg text-gray-700" >{item.text}</div>
      </div>
      <button
        onClick={() => deleteTodo(item.id)}
        className="bg-gray-600 px-2 py-1 hover:bg-gray-500 rounded-lg text-gray-300">Delete</button>
      
    </div>
   );
}
 
export default TodoItem;