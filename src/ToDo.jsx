export default function ToDo({ todo }) {
  const { id, title } = todo;
  return (
    <div className="toDosBox">
      <h4>User Id: {id} </h4>
      <p>Todo: {title}</p>
    </div>
  );
}
