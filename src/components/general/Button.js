import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./general.css";

const Button = (props) => {
  const { label, className, icon } = props;

  const cls = ["btn-root", !label && icon && "icon-btn-root", className].join(
    " "
  );
  return (
    <button className={cls}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {label && label}
    </button>
  );
};

Button.propTypes = {
  // The button label
  label: PropTypes.string,
  // Button custom classes
  className: PropTypes.string,
  // An icon to decorate the button with (optional)
  icon: PropTypes.any,
};

Button.defaultProps = {
  className: "btn-primary",
};

export default Button;
