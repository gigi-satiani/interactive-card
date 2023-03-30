export const Input = (props) => {
  return (
    <div>
      <div className="nameParent">
        <label className="nameLabel">{props.label}</label>
        <input
          className="nameInput"
          placeholder={props.placeholder}
          type={props.type}
          onChange={props.onChange}
          onBlur={props.onBlur}
          style={props.style}
          value={props.inputValue}
          maxLength={props.maxLength}
        />
        <span className="errorMsg" style={props.spanStyle}>
          {props.span}
        </span>
      </div>
    </div>
  );
};
