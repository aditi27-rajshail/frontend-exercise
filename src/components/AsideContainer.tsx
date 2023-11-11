/**
 * A container component for displaying aside content.
 * @param {AsideContainerData} asideContainerData - Data for the container, including title and subText.
 * @returns {React.Element} - The rendered aside container component.
 */

import { AsideContainerData } from "../types";

interface AsideContainerDataProps {
  asideContainerData: AsideContainerData;
}

const AsideContainer = ({ asideContainerData }: AsideContainerDataProps) => {
  return (
    <div
      data-testid="aside-container"
      className="aside-container flex flex-col items-start w-full xl:w-[189px] p-[16px] mb-[16px]">
      <p className="aside-container-title">{asideContainerData.title}</p>
      <p className="aside-container-sub-text ">{asideContainerData.subText}</p>
    </div>
  );
};

export default AsideContainer;
