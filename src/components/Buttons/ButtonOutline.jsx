export function ButtonOutline({
  title,
  isSelected,
  color = "primary",
  ...props
}) {
  return (
    <button
      type="submit"
      className={`btn ${isSelected ? `btn-${color}` : `btn-outline-${color}`}`}
      {...props}
    >
      {title}
    </button>
  );
}
