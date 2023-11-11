/**
 * Home component for the main page.
 * Renders the main content and aside section.
 *
 * @param {MainData[]} props.mainData - An array of main data to be displayed in accordions.
 * @param {AsideContainerData[]} props.asideContainerData - An array of aside container data.
 * @param {string} props.title - The title of the page.
 * @param {string} props.asideTitle - The title of the aside section.
 * @returns {React.Element} - The rendered Home component.
 */

import Accordion from "../components/Accordion/Accordion";
import AsideContainer from "../components/AsideContainer";
import { asideContainerData, asideTitle, mainData, title } from "../constants";
import { AsideContainerData, MainData } from "../types";

const Home = () => {
  return (
    <div>
      <h3 className="heading animate-fade-in-down">{title}</h3>
      <div className="flex flex-col xl:flex-row mt-8 items-start">
        {/*   Main Data */}
        <div className="flex-1">
          {mainData.map((accordionData: MainData, index: number) => {
            return (
              <div
                key={accordionData.title}
                style={{ animationDelay: `${index * 0.3}s` }}
                className="animate-fade-in-up">
                <Accordion
                  key={accordionData.title}
                  accordionData={accordionData}
                />
              </div>
            );
          })}
        </div>

        {/*  Aside Section */}
        <aside className="flex-1 xl:ml-4 w-full">
          <p className="aside-title animate-fade-in-down">{asideTitle}</p>
          <div className="mt-[12px]">
            {asideContainerData.map(
              (asideContainerData: AsideContainerData) => {
                return (
                  <AsideContainer
                    key={asideContainerData.title}
                    asideContainerData={asideContainerData}
                  />
                );
              }
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;
