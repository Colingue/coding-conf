// import IconInfo from "../icon/IconInfo";

import IconInfo from "../icon/IconInfo";

export default function InputText({
  label,
  value,
  onChange,
  caption,
  placeholder,
  error,
}) {
  return (
    <div className="input-container">
      {label && <label>{label}</label>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ borderColor: error ? "hsla(7, 71%, 60%, 0.714)" : "" }}
      />
      {caption && <small>{caption}</small>}
      {error && (
        <div className="error-container">
          <IconInfo />
          <small>{error}</small>
        </div>
      )}
    </div>
  );
}
