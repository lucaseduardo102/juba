export function InputField({
  value,
  placeholder,
  error,
  ...props
}) {
  const inputClassName = value !== "" ? "has-val input" : "input";

  return (
    <>
      <div className="field-container">
        <input
          className={inputClassName}
          value={value}
          {...props}
        />
        <span className="focus-input" data-placeholder={placeholder}></span>
      </div>
      <p className="paragrafo-de-erro">{error}</p>
    </>
  );
}
