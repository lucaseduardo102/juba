export function Button({ color = "primary", text, onClick }) {
  return (
    <button class={`btn btn-${color}`} type="submit" onClick={onClick}>
      {text}
    </button>
  );
}
