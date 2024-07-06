import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
import AddForm from "./AddForm";
export default function Todo(){
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch = useDispatch();

    const deleteHandler = (id) =>{
        console.log("delete", id);
        dispatch(deleteTodo(id));
    }
    const markAsDoneHandler = (id) => {
        console.log("marks as done");
        dispatch(markAsDone(id));
    } 
    return (
       <>
       <AddForm/>
       <h3>Todo List App</h3>
       <ul>
        {todos.map((todo) => (
            <li key={todo.id} >
               <span style={todo.isDone ? {textDecoration: "line-through"} :{} }>{todo.task} </span>
                <button onClick={() => deleteHandler(todo.id)}>Delete</button>
                <button onClick={() => markAsDoneHandler(todo.id)}>MarkAsdone</button>
            </li>
        ))}
       </ul>
       </> 
    );
}








