import { Timeline } from "@mantine/core";
import { IconBriefcaseFilled, IconPointFilled } from "@tabler/icons-react";
import Info from "./User";

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col pt-20 px-8 md:px-16 xl:px-32 3xl:px-0 items-center">
      <div className="text-5xl font-bold text-primary pb-20">Experience</div>
      <Timeline active={2} color="#DF73FF" className="w-full max-w-screen-2xl" bulletSize={32}>
        {Info.experience.map(({ position, period, description, logo, company }) => (
          <Timeline.Item data-aos="fade-up" key={company} bullet={<IconBriefcaseFilled size={32} className="text-background" />} className="text-primary text-2xl md:text-4xl font-semibold pt-12">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-0.5 rounded-2xl shadow-[0px_0px_4px_1px] shadow-primary">
              <div className="bg-background p-4 rounded-2xl">
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  {logo}
                  <div className="text-foreground text-xl md:text-3xl text-center sm:text-left flex flex-col">
                    {position}
                    <span className="flex flex-col sm:flex-row items-center gap-2 text-sm md:text-base text-gray-400">
                      <span className="flex items-end gap-2">
                        {company} <IconPointFilled size={12} />
                      </span>{" "}
                      {period}
                    </span>
                  </div>
                </div>
                <div className="text-foreground text-sm md:text-base py-4 text-justify font-sans">{description}</div>
              </div>
            </div>
          </Timeline.Item>
        ))}
        <Timeline.Item bullet={<IconBriefcaseFilled size={32} className="text-background" />} />
      </Timeline>
    </div>
  );
};

export default Experience;
