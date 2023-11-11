/**
 * A progress bar component that displays the progress of a multi-step process.
 * @param {number} step - The current step in the process.
 * @param {number} totalSteps - The total number of steps in the process.
 * @returns {React.Element} - The rendered progress bar component.
 */

import { progressStep } from "../constants";

interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

const ProgressBar = ({ step, totalSteps }: ProgressBarProps) => {
  const progressWidth = totalSteps ? Math.round((step / totalSteps) * 100) : 0;

  return (
    <div className="flex items-center">
      <div className="h-[6px] w-[60px] bg-neutral500 rounded overflow-hidden mr-2">
        <div
          style={{ width: `${progressWidth}%` }}
          className="bg-green500  transition-all duration-300 h-full"></div>
      </div>
      <span data-testid="progress-text" className="progress-text">
        {step}/{totalSteps}
        {progressStep}
      </span>
    </div>
  );
};

export default ProgressBar;
