export function Alert({type="danger",message}) {
  return (
    <div className={`alert alert-${type} custom-alert`} role="alert">
      {message}
    </div>
  );
}
