export function Description({ title, children }) {
  return (
    <div className="mb-3">
      <h5 className="fs-5">{title}</h5>
      {children}
      <hr />
    </div>
  );
}
