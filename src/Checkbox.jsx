export default function Checkbox({ onChange, checked }) {
  return (
    <input
      className="card__checkbox"
      type="checkbox"
      onChange={onChange}
      checked={checked}
    ></input>
  );
}
