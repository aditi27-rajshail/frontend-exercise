/**
 * AccordionDetails component for displaying detailed content in an accordion-style container.
 * @param {AccordionDetailsData} accordionDetails - The data for the accordion details.
 * @param {Function} onToggle - The function to handle the toggle action.
 * @param {boolean} isChecked - A flag to indicate whether the item is checked.
 * @param {boolean} disabled - A flag to indicate whether the accordion details are disabled.
 * @returns {React.Element} - The rendered AccordionDetails component.
 */

import Button from "../Button";
import { checkCircle, circleDashed } from "../../assets";
import Alert from "../Alert";
import { AccordionDetailsData } from "../../types";
import { actionBtnHandlers } from "../../logic/actionBtnHandlers";

interface AccordionDetailsProps {
  accordionDetails: AccordionDetailsData;
  onToggle: () => void;
  isChecked: boolean;
  disabled: boolean;
}

const AccordionDetails = ({
  accordionDetails,
  onToggle,
  isChecked,
  disabled,
}: AccordionDetailsProps) => {
  const callActionHandler = (actionKey: keyof typeof actionBtnHandlers) => {
    const handler = actionBtnHandlers[actionKey];
    if (handler) {
      handler();
    } else {
      console.log(`No action handler for key: ${actionKey}`);
    }
  };
  return (
    <div className="border border-solid border-neutral500 mt-4 p-4 rounded-lg">
      <div className="md:flex lg:gap-[77px] md:gap-[38px]">
        <div className="flex items-start">
          <img
            src={isChecked ? checkCircle : circleDashed}
            alt={isChecked ? "check circle" : "circle dashed"}
            width={24}
            height={24}
            className={` mr-[8px] ${!disabled && "cursor-pointer easeout"}`}
            onClick={!disabled ? onToggle : undefined}
          />
          {/* Content */}
          <div>
            <div className={`${disabled && "disabled"}`}>
              <h4 className="accordion-detail-title mb-2">
                {accordionDetails.title}
              </h4>
              {accordionDetails?.tag && (
                <span className="chip text-info600 h-[20px] py-0 px-2">
                  {accordionDetails.tag}
                </span>
              )}

              <p className="accordion-detail-sub-text mt-2">
                {accordionDetails.subText}
              </p>
            </div>
            {accordionDetails?.info && (
              <Alert text={accordionDetails.info} severity="info" />
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-3 md:mt-0">
          <Button
            buttonText={accordionDetails.buttonText}
            disabled={disabled}
            onClick={() => callActionHandler(accordionDetails.btnAction)}
          />
        </div>
      </div>
    </div>
  );
};

export default AccordionDetails;
