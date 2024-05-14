import { useEffect, useState } from "react";
import "./ToDos.css";
import ToDo from "./ToDo";
export default function ToDos() {
  //   1.
  const [toDos, setToDos] = useState([]);

  // 2. && 3.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setToDos(data));
  }, []);

  return (
    <div className="toDosBox">
      <h3>ToDos: {toDos.length} </h3>

      {toDos.map((toDo) => (
        <ToDo todo={toDo}></ToDo>
      ))}
    </div>
  );
}
