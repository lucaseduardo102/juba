export function ButtonAuth({ text, onClick }) {
    return (
      <div className="button-container">
        <button className="custom-button" type="button" onClick={onClick}>
          {text}
        </button>
      </div>
    );
}