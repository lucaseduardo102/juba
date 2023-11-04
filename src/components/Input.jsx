export function Input({ type, label, value, onChange, onBlur, maxLength, error }) {
    return (
      <div className="row mb-3">
        <label className="col-sm-3 col-form-label" for={label}>
          {label}
        </label>
        <div className="col-sm-9">
          <input
            className={`form-control is-${error ? "invalid" : "valid"}`}
            id={label}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            maxLength={maxLength}
            aria-describedby={`${label}-feedback`}
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