import { Card } from "@mantine/core";
import Info from "../User";
import { SkillCard } from "./SkillCard";

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col py-10 px-32 3xl:px-0 items-center">
      <div className="text-5xl font-bold text-primary pb-10">Skills</div>
      <div className="grid grid-cols-1 xl:grid-cols-[repeat(2,_minmax(500px,_1fr))] gap-8 w-full max-w-screen-2xl">
        {Info.skills.map(({ name, skills }) => (
          <Card key={name} shadow="sm" radius="lg" className="font-sans bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
            <div className="bg-background p-4 rounded-2xl h-full flex flex-col items-center">
              <div className="text-4xl font-bold text-foreground pb-10">{name}</div>
              <div className="flex flex-wrap gap-4 justify-center">
                {skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
