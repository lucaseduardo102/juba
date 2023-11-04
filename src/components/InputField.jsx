export function InputField({
  type,
  value,
  onChange,
  onBlur,
  placeholder,
  maxLength,
  error,
}) {
  const inputClassName = value !== "" ? "has-val input" : "input";

  return (
    <>
      <div className="field-container">
        <input
          className={inputClassName}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          maxLength={maxLength}
        />
        <span className="focus-input" data-placeholder={placeholder}></span>
      </div>
      <p className="paragrafo-de-erro">{error}</p>
    </>
  );
}
