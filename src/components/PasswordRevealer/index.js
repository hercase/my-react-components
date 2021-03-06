import React, { useState } from "react";
import "./styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;

const PasswordRevealer = ({ value }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className="pass-wrapper" data-testid="password-revealer">
      <input
        className="pass-wrapper__input"
        placeholder="Password"
        name="password"
        type={passwordShown ? "text" : "password"}
      />
      <i className="pass-wrapper__icon" onClick={togglePasswordVisiblity}>
        {eye}
      </i>
    </div>
  );
};

export default PasswordRevealer;
