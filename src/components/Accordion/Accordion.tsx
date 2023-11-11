/**
 * Accordion component for displaying a section with expandable/collapsible content.
 * @param {MainData} accordionData - The data for the accordion section.
 * @returns {React.Element} - The rendered Accordion component.
 */

import { useState, useCallback } from "react";
import { caretUp } from "../../assets";
import ProgressBar from "../ProgressBar";
import AccordionDetails from "./AccordionDetails";
import { AccordionDetailsData, MainData } from "../../types";

interface AccordionProps {
  accordionData: MainData;
}
const Accordion = ({ accordionData }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(accordionData.accordionDetails.length).fill(false)
  );

  const toggleChecked = useCallback((index: number) => {
    setCheckedState((prevState) => {
      const updatedCheckedState = [...prevState];
      updatedCheckedState[index] = !updatedCheckedState[index];
      return updatedCheckedState;
    });
  }, []);

  const stepsCompleted = checkedState.filter(Boolean).length;
  return (
    <div className="bg-white100 rounded-lg card flex flex-col items-start mb-4 w-full xl:w-[1011px] p-4 ">
      {/* Header */}
      <div className="flex justify-between w-full items-start xl:items-center">
        <div className="flex items-center">
          <img
            src={accordionData.img}
            alt={accordionData.title}
            width={26}
            height={26}
            className="mr-2"
          />
          <h3 className="card-title">{accordionData.title}</h3>
        </div>
        <div className="flex items-center space-x-2">
          <div className="hidden sm:block">
            <ProgressBar
              step={stepsCompleted}
              totalSteps={accordionData.accordionDetails.length}
            />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="transform transition-transform w-[16px] h-[16px] flex items-center justify-center"
            aria-label={isOpen ? "Collapse section" : "Expand section"}
            aria-expanded={isOpen}>
            <img
              src={caretUp}
              width={16}
              height={16}
              alt="Toggle accordion"
              className={`transition-transform duration-500 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
      </div>
      <p className="cardSubText my-4 sm:my-4">{accordionData.subText}</p>
      <div className="w-full mb-2 sm:hidden">
        <ProgressBar
          step={stepsCompleted}
          totalSteps={accordionData.accordionDetails.length}
        />
      </div>

      {/* Accordion Content */}

      {isOpen &&
        accordionData.accordionDetails.map(
          (accordionDetails: AccordionDetailsData, index: number) => {
            return (
              <AccordionDetails
                key={accordionDetails.title}
                accordionDetails={accordionDetails}
                onToggle={() => toggleChecked(index)}
                isChecked={checkedState[index]}
                disabled={accordionData.isDisabled}
              />
            );
          }
        )}
    </div>
  );
};

export default Accordion;
