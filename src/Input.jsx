export default function Input({ onChange, value }) {
  return (
    <input
      value={value}
      onChange={onChange}
      className="card__input"
      type="text"
      placeholder="Enter task"
    ></input>
  );
}
