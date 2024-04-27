export function Alert({type="danger",message}) {
  return (
    <div className={`alert alert-${type} custom-alert text-center`} role="alert">
      {message}
    </div>
  );
}
