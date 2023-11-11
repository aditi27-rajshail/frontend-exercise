/**
 * Alert component for displaying various severity messages.
 * @param {string} severity - The severity level of the alert (e.g., "info", "error").
 * @param {string} text - The text content of the alert.
 * @returns {React.Element} - The rendered alert component.
 */

import { infoLight } from "../assets";

interface AlertProps {
  severity: string;
  text: string;
}

const Alert = ({ severity, text }: AlertProps) => {
  return (
    <span className={`${severity} flex mt-[16px]`}>
      {severity === "info" && (
        <img
          src={infoLight}
          alt={severity}
          width={16}
          height={16}
          className="mr-[4px]"
        />
      )}
      <p className="alert-text">{text}</p>
    </span>
  );
};

export default Alert;
