/**
 * A button component with text and an optional disabled state.
 * @param {string} buttonText - The text to display on the button.
 * @param {boolean} disabled - A boolean indicating whether the button is disabled.
 * @returns {React.Element} - The rendered button component.
 */

import { arrowRight } from "../assets";

interface ButtonProps {
  buttonText: string;
  disabled?: boolean;
  onClick: () => void;
}
const Button = ({ buttonText, disabled, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        disabled && "disabled"
      } easeout flex h-[32px] w-[104px] p-[12px] items-center justify-center bg-primary500 rounded-[4px]`}>
      <p className="btn-text mr-2"> {buttonText}</p>
      <img src={arrowRight} alt="Right Arrow" width={16} height={16}></img>
    </button>
  );
};

export default Button;
