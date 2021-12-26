import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import {
  addTodo,
  decrement,
  increment,
  removeLastTodo,
} from "./vanilaRedux/mainReducer";

function App() {
  const count = useSelector((state) => state.main.count);

  const todos = useSelector((state) => state.main.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>counter {count}</h1>
      <button onClick={() => dispatch(increment())}>-</button>
      <button onClick={() => dispatch(decrement())}>+</button>
      <button onClick={() => dispatch(removeLastTodo())}>
        delete last todo
      </button>
      <button onClick={() => dispatch(addTodo(prompt()))}>add todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
