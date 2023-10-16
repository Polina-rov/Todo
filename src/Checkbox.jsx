export default function Checkbox({ onChange, checked }) {
  return (
    <label className="custom-checkbox">
      <input
        className="custom-checkbox__input"
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
    </label>
  );
}
