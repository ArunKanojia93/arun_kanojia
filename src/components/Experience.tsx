import { Timeline } from "@mantine/core";
import { IconBriefcaseFilled, IconPointFilled } from "@tabler/icons-react";
import Info from "./User";

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col pt-20 px-32 3xl:px-0 items-center">
      <div className="text-5xl font-bold text-primary pb-20">Experience</div>
      <Timeline active={2} color="#DF73FF" className="w-full max-w-screen-2xl" bulletSize={32}>
        {Info.experience.map(({ position, period, description, logo, company }, i) => (
          <Timeline.Item data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500" key={i} bullet={<IconBriefcaseFilled size={32} className="text-background" />} className="text-primary text-4xl font-semibold pt-12">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-0.5 rounded-2xl shadow-[0px_0px_4px_1px] shadow-primary">
              <div className="bg-background p-4 rounded-2xl">
                <div className="flex items-center gap-4 pt-4">
                  {logo}
                  <div className="text-foreground text-3xl flex flex-col">
                    {position}
                    <span className="flex items-center gap-2 text-base text-gray-400">
                      {company} <IconPointFilled size={12} /> {period}
                    </span>
                  </div>
                </div>
                <div className="text-foreground text-base py-4 text-justify font-sans">{description}</div>
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
