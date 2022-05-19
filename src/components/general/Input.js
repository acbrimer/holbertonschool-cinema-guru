import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./general.css";

const Input = (props) => {
  const { label, type, className, value, setValue, icon, inputAttributes } =
    props;
  const { id } = inputAttributes || {
    id: `input-${Math.round(Math.random() * 1000)}`,
  };

  return (
    <div className={`input-root ${className}`}>
      {type === "textarea" ? (
        <textarea
          {...inputAttributes}
          id={id}
          value={value}
          onChange={setValue}
        />
      ) : (
        <input
          {...inputAttributes}
          id={id}
          value={value}
          onChange={setValue}
          type={type}
        />
      )}
      <label for={id}>
        {icon && <FontAwesomeIcon icon={icon} />}
        {label}
      </label>
    </div>
  );
};

Input.propTypes = {
  // The input label
  label: PropTypes.string,
  // Input type
  type: PropTypes.string,
  // Input custom classes
  className: PropTypes.string,
  // The controlled state
  value: PropTypes.any,
  // The setState function of the above state
  setValue: PropTypes.func,
  // An icon to decorate the input with (optional)
  icon: PropTypes.any,
  // Other input attributes (optional)
  inputAttributes: PropTypes.object,
};

Input.defaultProps = {
  className: "input-standard input-dark",
  type: "text",
};

export default Input;
