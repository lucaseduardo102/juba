export function Input({ label, error, ...props }) {
  return (
    <div className="row mb-3">
      <label className="col-sm-3 col-form-label" for={label}>
        {label}
      </label>
      <div className="col-sm-9">
        <input
          className={`form-control is-${error ? "invalid" : "valid"}`}
          id={label}
          aria-describedby={`${label}-feedback`}
          {...props}
        ></input>
        <div
          id={`${label}-feedback`}
          className={`${error ? "invalid" : "valid"}-feedback`}
        >
          {error}
        </div>
      </div>
    </div>
  );
}
