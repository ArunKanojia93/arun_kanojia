interface SkillCardProps {
  name: string;
  icon: JSX.Element;
}

export const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <div className="flex items-center justify-center gap-2 shadow-[0px_0px_4px_1px] shadow-primary rounded-xl py-2 px-4">
      {icon}
      <div className="text-foreground text-lg font-semibold">{name}</div>
    </div>
  );
};
